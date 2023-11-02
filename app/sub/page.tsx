import PageClient from "./page.client";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Page() {
  const posts = await loadPosts();
  return <PageClient posts={posts} />;
}
