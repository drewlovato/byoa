async function fetchAPI(endpoint) {
  const res = await fetch(`${process.env.NEXT_API_URL}${endpoint}`);
  const data = await res.json();
  return data;
}

export async function getAllPosts() {
  const data = await fetchAPI("/posts");
  return data;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI("/posts?Slug=${slug}");
  return data[0];
}
