"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, User, Loader2 } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  image: string
}

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (response.ok) {
          const blogsData = await response.json()
          setBlogs(blogsData)
        } else {
          setError("Failed to load blogs")
        }
      } catch (error) {
        setError("Failed to load blogs")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const openBlogModal = (blog: BlogPost) => {
    setSelectedBlog(blog)
  }

  const closeBlogModal = () => {
    setSelectedBlog(null)
  }

  if (isLoading) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Loading blogs...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (blogs.length === 0) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          <p className="text-gray-400 text-sm mt-2">Check back later for new content!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* BLOGS text at top for mobile */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">BLOGS</h1>
        </div>

        {/* Blog posts below for mobile */}
        <div className="grid grid-cols-1 gap-4">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group w-full"
              onClick={() => openBlogModal(blog)}
            >
              <div className="flex flex-col h-full">
                {/* Blog image */}
                <div className="w-full">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Blog content */}
                <div className="w-full flex-1 flex flex-col">
                  <CardHeader className="pb-3 px-4">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{blog.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 mt-auto px-4">
                    <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="truncate">{blog.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8">
        <div className="flex-shrink-0 flex items-center">
          <div className="sticky top-8">
            <h1
              className="text-6xl font-bold text-primary"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              BLOGS
            </h1>
          </div>
        </div>

        {/* Blog posts grid for desktop */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group w-full"
                onClick={() => openBlogModal(blog)}
              >
                <div className="flex flex-col h-full">
                  {/* Blog image */}
                  <div className="w-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Blog content */}
                  <div className="w-full flex-1 flex flex-col">
                    <CardHeader className="pb-3 px-6">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">{blog.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 mt-auto px-6">
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span className="truncate">{blog.author}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      <Dialog open={!!selectedBlog} onOpenChange={closeBlogModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto w-[calc(100vw-2rem)] sm:w-full">
          {selectedBlog && (
            <>
              <DialogHeader className="space-y-4">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src={selectedBlog.image || "/placeholder.svg"}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <DialogTitle className="text-xl sm:text-2xl font-bold leading-tight">
                    {selectedBlog.title}
                  </DialogTitle>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{selectedBlog.author}</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedBlog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedBlog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <DialogDescription asChild>
                <div className="prose prose-sm sm:prose prose-gray dark:prose-invert max-w-none">
                  {selectedBlog.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h3 key={index} className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3">
                          {paragraph.slice(2, -2)}
                        </h3>
                      )
                    }
                    return (
                      <p key={index} className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
