import Link from "next/link";

import { useRouter } from 'next/router';
import styles from '../../../styles/SelectedUser.module.css'


export default function SelectedUser() {
    const router = useRouter();
    let userProps;
    if(router.query.user) {
      userProps = JSON.parse(router.query.user);
    }
    if(!userProps){
      return (<h1>Loading props....</h1>)
    }
    return (
      <div>
        <h1>Here's your selected USER details: </h1>
        <div className={styles.seletcedUser}>
          <p>Name: <span className={styles.selected}>{userProps.name}</span></p>
          <p>UserName: <span className={styles.selected}>{userProps.username}</span></p>
          <p>Website: <span className={styles.selected}>{userProps.website}</span></p>
        </div>
        <Link href="/" className={styles.back}>Back</Link>
      </div>
    )
  }