import Image from "next/image";
import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";
import PostGrid from '../components/post-grid'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import { GetStaticProps } from 'next'

const title = "UX Research"

type Props = {
  allPosts: Post[]
}

const UXResearch = ({ allPosts }: Props) => {
  const posts = allPosts.filter((category) => category.category === "UX Research")

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
        <section className="mt-16 mb-32">
          {posts.length > 0 ? <PostGrid posts={posts} /> :
            <>
              <p className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">Nothing there yet</p>
              <Image src={"/assets/coming-soon.png"} width={250} height={250} alt="" />
            </>
          }
        </section>
      </Container>
    </Layout >
  )
}

export default UXResearch

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category'
  ])

  return {
    props: { allPosts },
  }
}