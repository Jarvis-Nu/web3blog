import Head from 'next/head'
import Header from '../components/Header'
import { gql } from "@apollo/client";
import client from "../apollo-client"
import Post from '../components/Post';
import ShortIntro from '../components/ShortIntro';

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Web3Blog</title>
        <meta name="description" content="This is a sample blog built with web3 infastructure backed up by web3 cms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col items-center mx-auto'>
        <Header />
        <ShortIntro />
        {
          posts.map(post => <Post title={post.nameOfPost} id={post.id} description={post.postDescription} thumbnail={post.thumbnailUrl} date={post.postDate} key={post.id} />)
        }
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const result = await client.query({
      query: gql`
        query Posts {
          postEntities(where: { owner: "0xaEc10C6768E492d3D20FC996cF514f113C3dB904"}) {
            id
            nameOfPost
            postDescription
            thumbnailUrl
            postDate
          }
        }
      `
  }).catch(e => console.log(e))
  const posts = result?.data.postEntities
  return {
    props: {
        posts
    }
  }
}