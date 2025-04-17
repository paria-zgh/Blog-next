export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/popular-posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function PopularPosts({ posts }) {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Popular Posts</h1>
      <div className="list-group">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            {post.title}
            <span className="badge bg-secondary">{post.views} views</span>
          </a>
        ))}
      </div>
    </div>
  );
}
