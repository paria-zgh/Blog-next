export default function handler(req, res) {
  const posts = [
    { slug: 'post-1', title: 'Post 1', body: 'This is the first post with lots of content to show the layout. It should look nice!', views: 120 },
    { slug: 'post-2', title: 'Post 2', body: 'This is the second post, also filled with content that shows off the card layout and responsive design.', views: 95 },
    { slug: 'post-3', title: 'Post 3', body: 'This is the third post, also filled with content that showcases beautiful colors and layout styling.', views: 210 },
    { slug: 'post-4', title: 'Post 4', body: 'Here is the fourth post with an interesting description. Let’s see how it looks in a beautiful card with colors.', views: 180 },
    { slug: 'post-5', title: 'Post 5', body: 'The fifth post is here, this one is a little longer and gives more room for layout styling with cool color patterns!', views: 240 },
    { slug: 'post-6', title: 'Post 6', body: 'This is the sixth post, and we are testing how it looks with lots of content inside the card that makes the page look elegant.', views: 85 },
    { slug: 'post-7', title: 'Post 7', body: 'The seventh post is even better! With lots of detailed content to check out, and some cool colors to make it pop.', views: 300 },
    { slug: 'post-8', title: 'Post 8', body: 'This is the eighth post with more great content. It’s designed with color to bring out the best look for your layout.', views: 150 },
  ];

  res.status(200).json(posts);
}
