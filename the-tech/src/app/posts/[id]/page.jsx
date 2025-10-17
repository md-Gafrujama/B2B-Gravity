// src/app/posts/[id]/page.jsx
export async function generateStaticParams() {
  // Skip static generation for faster builds
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return []
  }
  
  // Only pre-render critical pages
  const criticalPosts = await getCriticalPosts()
  
  return criticalPosts.map((post) => ({
    id: post.id,
  }))
}

export default function Post({ params }) {
  return <div>Post {params.id}</div>
}
