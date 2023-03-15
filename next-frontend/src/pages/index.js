import { getAllPosts } from "../../lib/api";

export default function Home({ allPosts }) {
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.Title}</h2>
          <p>{post.Content}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  };
}

// export default function Home({ posts }) {
//   return (
//     <div>
//       {/* loop over the posts and show them */}
//       {posts &&
//         posts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.Title}</h2>
//             <div>{post.Content}</div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // get posts from api
//   const res = await fetch("http://localhost:1337/api/posts");

//   const posts = await res.json();

//   return {
//     props: { posts },
//   };
//}
