import { gql } from "@apollo/client";
import Head from "next/head";
import client from "../../apollo-client"
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.bubble.css';

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function Preview({ post, id }) {
    console.log(id)
    return (
        <div className="flex justify-center">
            <Head>
                <title>{post[0]?.nameOfPost}</title>
                <meta name="description" content={post[0]?.postDescription} />
                <link rel="icon" href={post[0]?.thumbnailUrl} />
            </Head>
            <div className="flex flex-col items-center max-w-2xl p-5 space-y-5">
                {
                    post[0]?.thumbnailUrl && <img src={post[0]?.thumbnailUrl} className="w-full h-64" />
                }
                <h1 className="text-2xl font-bold">{post[0]?.nameOfPost}</h1>
                <p className="font-semibold">Posted on {post[0]?.postDate}</p>
                <div>
                    <ReactQuill
                        value={post[0]?.postContent}
                        readOnly={true}
                        theme="bubble"
                    />
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const result = await client.query({
        query: gql`
        query Posts {
                postEntities {
                    id
                }
            }
        `
    }).catch(e => console.log(e))
    const lists = result?.data.postEntities
    const paths = []
    lists?.map(list => paths.push(`/posts/${list.id}`))
    console.log(paths)
    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps({ params }) {
    const id = params?.id
    const result = await client.query({
        query: gql`
        query Posts {
                postEntities(where: { id: "${id}"}) {
                id
                nameOfPost
                postDescription
                thumbnailUrl
                postContent
                postDate
                }
            }
        `
    }).catch(e => console.log(e))
    const post = result?.data.postEntities
    
    if (post?.length == 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
            id
        },
        revalidate: false
    }
}