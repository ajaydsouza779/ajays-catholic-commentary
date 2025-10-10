import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    // Check if comment exists
    const comment = await prisma.comment.findUnique({
      where: { id },
      include: {
        post: {
          select: { slug: true }
        },
        author: {
          select: { id: true }
        }
      }
    })

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    // Check if user is admin OR the comment author
    const isAdmin = session.user?.role === "ADMIN"
    const isAuthor = comment.author ? comment.author.id === session.user?.id : false

    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: "Unauthorized to delete this comment" }, { status: 403 })
    }

    // Delete the comment
    await prisma.comment.delete({
      where: { id }
    })

    return NextResponse.json({ 
      message: "Comment deleted successfully",
      postSlug: comment.post.slug 
    })

  } catch (error) {
    console.error("Error deleting comment:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const { content } = await request.json()

    if (!content || content.trim().length === 0) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 })
    }

    // Check if comment exists
    const comment = await prisma.comment.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true }
        }
      }
    })

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    // Check if user is admin OR the comment author
    const isAdmin = session.user?.role === "ADMIN"
    const isAuthor = comment.author ? comment.author.id === session.user?.id : false

    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: "Unauthorized to edit this comment" }, { status: 403 })
    }

    // Update the comment
    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { 
        content: content.trim(),
        updatedAt: new Date()
      },
      include: {
        author: {
          select: { name: true, email: true }
        }
      }
    })

    return NextResponse.json(updatedComment)

  } catch (error) {
    console.error("Error updating comment:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
