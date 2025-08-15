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

// In-memory store (in production, this would be a database)
const blogStore: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.",
    content: `The web development landscape is constantly evolving, with new technologies and frameworks emerging at a rapid pace. In this comprehensive guide, we'll explore the key trends that are shaping the future of web development.

**React and Next.js Evolution**
React continues to dominate the frontend landscape, with Next.js providing an excellent full-stack framework. The introduction of Server Components and the App Router has revolutionized how we build React applications, offering better performance and developer experience.

**TypeScript Adoption**
TypeScript has become the de facto standard for large-scale JavaScript applications. Its static typing system helps catch errors early and improves code maintainability, making it essential for modern web development.

**AI Integration**
Artificial Intelligence is becoming increasingly integrated into web development workflows. From AI-powered code completion to automated testing and deployment, AI tools are enhancing developer productivity.

**Performance Optimization**
Web performance remains crucial for user experience and SEO. Modern techniques like code splitting, lazy loading, and edge computing are becoming standard practices for delivering fast, responsive web applications.

The future of web development is bright, with exciting technologies on the horizon that will continue to push the boundaries of what's possible on the web.`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/modern-web-dev-workspace.png",
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques that every developer should know.",
    content: `CSS Grid and Flexbox are two powerful layout systems that have revolutionized how we approach web design. Understanding when and how to use each one is crucial for creating responsive, maintainable layouts.

**CSS Grid: The Two-Dimensional Layout System**
CSS Grid excels at creating complex, two-dimensional layouts. It's perfect for:
- Page-level layouts
- Card-based designs
- Complex grid systems
- Overlapping elements

Key properties include grid-template-columns, grid-template-rows, and grid-area for precise control over element placement.

**Flexbox: The One-Dimensional Layout System**
Flexbox is ideal for one-dimensional layouts and component-level design:
- Navigation bars
- Button groups
- Centering content
- Distributing space between elements

Essential properties include justify-content, align-items, and flex-grow for flexible, responsive designs.

**Combining Grid and Flexbox**
The real power comes from using both systems together. Use Grid for the overall page structure and Flexbox for component internals. This approach provides maximum flexibility and maintainability.

**Best Practices**
- Start with mobile-first design
- Use semantic HTML elements
- Test across different screen sizes
- Consider accessibility implications

Mastering these layout techniques will significantly improve your ability to create beautiful, responsive web interfaces.`,
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/css-grid-flexbox-examples.png",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust, scalable backend APIs using Node.js and modern frameworks.",
    content: `Building scalable APIs is crucial for modern web applications. Node.js provides an excellent platform for creating high-performance backend services that can handle thousands of concurrent requests.

**Architecture Patterns**
When building scalable APIs, consider these architectural patterns:
- RESTful API design principles
- Microservices architecture
- Event-driven architecture
- Clean architecture patterns

**Database Optimization**
Database performance is often the bottleneck in API applications:
- Use connection pooling
- Implement proper indexing
- Consider read replicas for scaling reads
- Use caching strategies (Redis, Memcached)

**Security Best Practices**
Security should be built into your API from the ground up:
- Implement proper authentication (JWT, OAuth)
- Use HTTPS everywhere
- Validate and sanitize all inputs
- Implement rate limiting
- Use CORS appropriately

**Performance Optimization**
Several techniques can improve API performance:
- Implement caching at multiple levels
- Use compression (gzip)
- Optimize database queries
- Implement pagination for large datasets
- Use CDNs for static assets

**Monitoring and Logging**
Proper monitoring is essential for maintaining scalable APIs:
- Implement structured logging
- Use APM tools for performance monitoring
- Set up alerts for critical metrics
- Track business metrics alongside technical ones

By following these practices, you can build APIs that scale efficiently and provide excellent performance for your users.`,
    author: "Alex Rodriguez",
    date: "2024-01-05",
    readTime: "8 min read",
    image: "/nodejs-api-architecture.png",
  },
  {
    id: 4,
    title: "JavaScript Frameworks in 2024",
    excerpt: "Comparing the most popular JavaScript frameworks and choosing the right one for your project.",
    content: `The JavaScript ecosystem continues to evolve rapidly, with new frameworks and libraries emerging regularly. In 2024, several frameworks stand out as the top choices for different types of projects.

**React: The Ecosystem Leader**
React remains the most popular choice for frontend development, offering:
- Massive ecosystem and community support
- Excellent tooling and developer experience
- Strong job market and learning resources
- Flexibility to build anything from simple sites to complex applications

**Vue.js: The Progressive Framework**
Vue.js continues to gain popularity with its approachable learning curve:
- Gentle learning curve for beginners
- Excellent documentation and community
- Great performance out of the box
- Perfect balance between simplicity and power

**Angular: The Enterprise Choice**
Angular remains strong in enterprise environments:
- Full-featured framework with everything included
- Strong TypeScript integration
- Excellent for large-scale applications
- Comprehensive testing and development tools

**Svelte: The Compile-Time Framework**
Svelte is gaining traction with its unique approach:
- No virtual DOM overhead
- Smaller bundle sizes
- Excellent performance characteristics
- Simple, intuitive syntax

**Choosing the Right Framework**
Consider these factors when selecting a framework:
- Team expertise and learning curve
- Project requirements and complexity
- Performance needs
- Long-term maintenance considerations
- Community and ecosystem support

The best framework is the one that fits your team's needs and project requirements. Each has its strengths and ideal use cases.`,
    author: "Emma Davis",
    date: "2024-01-20",
    readTime: "6 min read",
    image: "/javascript-frameworks-chart.png",
  },
]

export const blogService = {
  // Get all blogs
  getAllBlogs: (): BlogPost[] => {
    return [...blogStore]
  },

  // Get blog by ID
  getBlogById: (id: number): BlogPost | undefined => {
    return blogStore.find((blog) => blog.id === id)
  },

  // Create new blog
  createBlog: (blogData: Omit<BlogPost, "id" | "date">): BlogPost => {
    const newId = Math.max(...blogStore.map((b) => b.id), 0) + 1
    const newBlog: BlogPost = {
      ...blogData,
      id: newId,
      date: new Date().toISOString().split("T")[0],
    }
    blogStore.push(newBlog)
    return newBlog
  },

  // Update blog
  updateBlog: (id: number, blogData: Partial<Omit<BlogPost, "id">>): BlogPost | null => {
    const index = blogStore.findIndex((blog) => blog.id === id)
    if (index === -1) return null

    blogStore[index] = { ...blogStore[index], ...blogData }
    return blogStore[index]
  },

  // Delete blog
  deleteBlog: (id: number): boolean => {
    const index = blogStore.findIndex((blog) => blog.id === id)
    if (index === -1) return false

    blogStore.splice(index, 1)
    return true
  },
}

export type { BlogPost }
