import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Nav from '../layout/nav'


export default function ekampreet() {
  return (
    <>
    <Layout>
    <Head>
        <title>Ekampreet | ps7.online</title>
      </Head>
      <Nav />
      <h1>Welcome ekam</h1>
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
    </Layout>
    </>
  )
}