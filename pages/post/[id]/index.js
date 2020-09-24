import Link from "next/link";

import { useRouter } from 'next/router';

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();
  const id = context.params.id;
  console.log("id is", typeof id)
  const selectedPost = posts.filter(post => post.id === +id)[0]
  return {
    props: {
      name: 'Manoj',
      selectedPost
    }, // will be passed to the page component as props
  }
}

export const getStaticPaths = async () => {
  return {
      paths: [
          {
              params:{id: '1'}
          },
          {
              params:{id: '2'}
          }
      ],
      fallback: true
  }
}


export default function SelectedUser(props) {
  const { selectedPost } = props;
    return (
      <div>
        <h1>Here's your selected POST details: </h1>
        <h2>Title: {selectedPost.title}</h2>
        <h2>Body: {selectedPost.body}</h2>
        <Link href="/">Back</Link>
      </div>
    )
  }