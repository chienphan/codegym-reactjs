import axios from "axios";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = response.data
  return {
    props: {
      posts
    },
  }
}

function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id} style={{marginBottom: 10}}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
