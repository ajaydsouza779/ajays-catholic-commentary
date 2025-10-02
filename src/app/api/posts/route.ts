import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const limit = parseInt(searchParams.get("limit") || "50")
    const offset = parseInt(searchParams.get("offset") || "0")

    // Build where clause
    const where: { status?: string } = {}
    
    // If user is not admin, only show published posts
    if (session.user?.role !== "ADMIN") {
      where.status = "PUBLISHED"
    } else if (status) {
      where.status = status
    }

    const posts = await prisma.post.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        },
        categories: {
          include: {
            category: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      },
      take: limit,
      skip: offset
    })

    // Transform the data to include category and tag names
    const transformedPosts = posts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      status: post.status,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      author: post.author,
      categories: post.categories.map(pc => pc.category),
      tags: post.tags.map(pt => pt.tag)
    }))

    return NextResponse.json(transformedPosts)
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, content, excerpt, status, categoryIds, tagIds } = body

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug }
    })

    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      )
    }

    // Debug: Log the session user ID
    console.log("Session user ID:", session.user.id)
    
    // Verify the user exists in the database
    let authorIdToUse = session.user.id;
    if (!authorIdToUse) {
      console.log("Session user ID is undefined, trying to find user by email.");
      if (!session.user.email) {
        return new NextResponse(JSON.stringify({ error: "User email not found in session." }), { status: 401 });
      }
      const userByEmail = await prisma.user.findUnique({
        where: { email: session.user.email }
      });
      if (userByEmail) {
        console.log("Found user by email, using their ID:", userByEmail.id);
        authorIdToUse = userByEmail.id;
      } else {
        return new NextResponse(JSON.stringify({ error: "User not found in database by email." }), { status: 404 });
      }
    } else {
      const user = await prisma.user.findUnique({
        where: { id: authorIdToUse }
      });
      if (!user) {
        console.log("User not found in database with session ID, trying to find by email.");
        if (!session.user.email) {
          return new NextResponse(JSON.stringify({ error: "User email not found in session." }), { status: 401 });
        }
        const userByEmail = await prisma.user.findUnique({
          where: { email: session.user.email }
        });
        if (userByEmail) {
          console.log("Found user by email, using their ID:", userByEmail.id);
          authorIdToUse = userByEmail.id;
        } else {
          return new NextResponse(JSON.stringify({ error: "User not found in database by email." }), { status: 404 });
        }
      }
    }

    // Create the post first without categories and tags
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 200) + "...",
        status: status || "DRAFT",
        authorId: authorIdToUse
      }
    })

    // Add categories if provided and they exist
    if (categoryIds && categoryIds.length > 0) {
      const existingCategories = await prisma.category.findMany({
        where: { id: { in: categoryIds } }
      })
      
      if (existingCategories.length > 0) {
        await prisma.postCategory.createMany({
          data: existingCategories.map(category => ({
            postId: post.id,
            categoryId: category.id
          }))
        })
      }
    }

    // Add tags if provided and they exist
    if (tagIds && tagIds.length > 0) {
      const existingTags = await prisma.tag.findMany({
        where: { id: { in: tagIds } }
      })
      
      if (existingTags.length > 0) {
        await prisma.postTag.createMany({
          data: existingTags.map(tag => ({
            postId: post.id,
            tagId: tag.id
          }))
        })
      }
    }

    // Fetch the complete post with relationships
    const completePost = await prisma.post.findUnique({
      where: { id: post.id },
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        author: { select: { name: true, email: true } }
      }
    })

    return NextResponse.json(completePost, { status: 201 })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
