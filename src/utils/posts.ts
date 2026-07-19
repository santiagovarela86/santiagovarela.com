interface PostData {
  pubDate: Date;
}

export function getPostPath(post: { id: string; data: PostData }) {
  const year = post.data.pubDate.getUTCFullYear();
  const month = String(post.data.pubDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(post.data.pubDate.getUTCDate()).padStart(2, '0');

  return `/${year}/${month}/${day}/${post.id}/`;
}
