import { useRouter } from "next/router";
import Layout from "../../Layout/Layout";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    props: {
      posts: data,
    },
  };
}

export default function Blogs({ posts }) {
  const router = useRouter();
  return (
    <Layout>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-10 hover:cursor-pointer hover:scale-[1.01] transition"
          onClick={() => router.push(`/blogs/${post.id}`)}
        >
          <h1 className="text-2xl font-bold mb-3">
            {post.id}. {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      ))}
    </Layout>
  );
}
