import Head from 'next/head';
import { useQuery } from 'react-query';
import Post from '../post';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    return fetch(POSTS_URL).then(res => res.json());
}

const Posts = () => {
    const { isLoading, error, data }  = useQuery('posts', getPosts);

    return(
        <>
            <Head>
                <title>All Posts</title>
            </Head>
            { isLoading && <h1>Loading Posts....</h1>}
            {error && <h1>Something bad happened...</h1>}
            <h1>All Posts</h1>
            {
                data && data.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
        </>
    )
}

export default Posts;

