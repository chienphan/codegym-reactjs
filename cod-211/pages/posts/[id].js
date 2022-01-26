import axios from "axios";

export const getStaticPaths = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts = response.data
    const paths = posts.map(post => ({
      params: { id: post.id.toString() },
    }))
    return { paths, fallback: false  }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = response.data
    return {
      props: {
        post
      },
    }
}

function PostDetail({ post }) {
  console.log(post);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
