import Head from 'next/head';
import { useQuery } from 'react-query';
import User from '../user';
import styles from '../../styles/Users.module.css';


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


const getPosts = () => {
    return fetch(POSTS_URL).then(res => res.json());
}

const getUsers = () => {
    return fetch(USERS_URL).then(res => res.json());
}

const Posts = () => {
    const { isLoading, error, data }  = useQuery('users', getUsers);

    return(
        <>
            <Head>
                <title>All Users</title>
            </Head>
            { isLoading && <h1>Loading Users....</h1>}
            {error && <h1>Something bad happened...</h1>}
            <h1 className={styles.header}>All Users</h1>
            {
                data && data.map(user => (
                    <User user={user} key={user.id}/>
                ))
            }
        </>
    )
}

export default Posts;

