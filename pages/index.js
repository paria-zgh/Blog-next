export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-primary">All Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.slug}>
            <a href={`/posts/${post.slug}`} className="text-decoration-none">
              <div className="card h-100 shadow-lg hover-scale">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-truncate">{post.body}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{post.views} views</small>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
