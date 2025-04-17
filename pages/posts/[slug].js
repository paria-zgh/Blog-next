export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-5">
      <div
        className={`card shadow-sm p-4 ${post.views > 200 ? 'bg-primary text-white' : 'bg-light text-dark'}`}
      >
        <h1 className="mb-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
      </div>
    </div>
  );
}
