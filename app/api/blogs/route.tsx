import { type NextRequest, NextResponse } from "next/server"
import { blogService } from "../../lib/blog-store"

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogs = blogService.getAllBlogs()
    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

// POST /api/blogs - Create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, author, readTime, image } = body

    // Validate required fields
    if (!title || !content || !author) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, and author are required" },
        { status: 400 },
      )
    }

    const blogData = {
      title,
      excerpt: excerpt || "",
      content,
      author,
      readTime: readTime || "5 min read",
      image: image || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(title)}`,
    }

    const newBlog = blogService.createBlog(blogData)
    return NextResponse.json(newBlog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
