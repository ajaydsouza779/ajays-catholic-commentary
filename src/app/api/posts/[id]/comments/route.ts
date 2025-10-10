import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const comments = await prisma.comment.findMany({
      where: { postId: id, status: "APPROVED" },
      orderBy: { createdAt: "asc" },
      include: { author: { select: { id: true, name: true, email: true } } }
    })
    return NextResponse.json(comments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params
    const body = await request.json()
    const { content, parentId, guestName } = body

    if (!content || typeof content !== "string" || content.trim().length === 0) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      )
    }

    // For guest comments, require a name
    if (!session?.user?.id && (!guestName || typeof guestName !== "string" || guestName.trim().length === 0)) {
      return NextResponse.json(
        { error: "Name is required for guest comments" },
        { status: 400 }
      )
    }

    // Ensure post exists
    const post = await prisma.post.findUnique({ where: { id } })
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Create comment data based on whether user is logged in or not
    const commentData = {
      postId: id,
      content: content.trim(),
      status: "APPROVED" as const, // MVP: auto-approve; can change to PENDING later
      ...(parentId ? { parentId } : {}),
      // For logged-in users
      ...(session?.user?.id ? { authorId: session.user.id } : {}),
      // For guest users
      ...(!session?.user?.id ? { guestName: guestName.trim() } : {})
    }

    const comment = await prisma.comment.create({
      data: commentData,
      include: { 
        author: { select: { id: true, name: true, email: true } } 
      }
    })

    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    )
  }
}


