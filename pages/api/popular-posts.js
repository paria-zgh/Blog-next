export default function handler(req, res) {
  const posts = [
    { slug: 'post-5', title: 'مقاله پنجم', views: 56 },
    { slug: 'post-2', title: 'مقاله دوم', views: 45 },
    { slug: 'post-3', title: 'مقاله سوم', views: 33 },
    { slug: 'post-1', title: 'مقاله اول', views: 21 },
    { slug: 'post-4', title: 'مقاله چهارم', views: 12 },
  ];
  res.status(200).json(posts);
}