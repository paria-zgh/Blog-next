// api/posts/[slug].js
export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const response = await fetch(`http://localhost:3000/api/posts`);
    const posts = await response.json();

    const post = posts.find((p) => p.slug === slug);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}
