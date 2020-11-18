import Link from 'next/link'
import Head from 'next/head'

export default function jasnoor() {
  return (
    <>
    <Head>
        <title>Jasnoor | ps7.online</title>
      </Head>
      <h1>Welcome Jasnoor Singh</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <br />
        <Link href="/members/ekampreet">
          <a>Ekampreet</a>
        </Link>
        <br />
        <Link href="/members/jasnoor">
          <a>Jasnoor</a>
        </Link>
      </h2>
    </>
  )
}