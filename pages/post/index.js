
import Link from 'next/link'

const Post = (props) => {

    const { post } = props;
    
    return(
        <div>
            <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
            </Link>
        </div>



    )
}

export default Post;