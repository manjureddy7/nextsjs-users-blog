import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/User.module.css'

const MicrodataLink = ({ href, children, ...rest }) => (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
)

const User = (props) => {
    const router = useRouter();
    const { user } = props;
    const selectedUser = () => {
        router.push(`/user/${user.id}`)
    }
    return(
        <div className={styles.userLinks}>

            {/* I want to pass UserData to my dynamic route */}
            <Link
                href={{
                    pathname: `/user/[name]`,
                    query: {user: JSON.stringify(user)}
                }}
            >
                <a>{user.name}</a>
            </Link>



            
            {/* <button onClick={selectedUser}>Get all details of {user.name}</button>
            <Link href={`/user/${user.id}`}>
                 <a user={user}>{user.name}</a>
            </Link> */}
            {/* <MicrodataLink href={`/user/${user.id}?user=${user}`} user={user}>{user.name}</MicrodataLink> */}
            {/* <Link href={`/user/${user.id}`}>
            <a itemProp="yoo..">link text</a>
            </Link> */}
            
            {/* <Link href={`/user/${encodeURIComponent(user.name)}`}>
                <SelectedUser user={user}/>
          </Link> */}
        </div>
    )
}

export default User;