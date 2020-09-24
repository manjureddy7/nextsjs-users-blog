import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Users Blog</title>
      </Head>
      <Link href="/users">Go to all users</Link>
    </div>
  )
}
