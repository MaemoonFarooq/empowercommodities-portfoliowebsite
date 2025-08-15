import { type NextRequest, NextResponse } from "next/server";
import { blogService } from "../../../lib/blog-store";

// GET /api/blogs/[id] - Get blog by ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const blog = blogService.getBlogById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

// PUT /api/blogs/[id] - Update blog
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const body = await request.json();
    const { title, excerpt, content, author, readTime, image } = body;

    // Validate required fields
    if (!title || !content || !author) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, and author are required" },
        { status: 400 }
      );
    }

    const updateData = {
      title,
      excerpt,
      content,
      author,
      readTime,
      image,
    };

    const updatedBlog = blogService.updateBlog(id, updateData);
    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete blog
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const deleted = blogService.deleteBlog(id);
    if (!deleted) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
