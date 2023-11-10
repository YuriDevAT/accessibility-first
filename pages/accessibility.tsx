import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";
import PostGrid from '../components/post-grid'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'

const title = "Accessibility"

type Props = {
  allPosts: Post[]
}

const Accessibility = ({ allPosts }: Props) => {
  const posts = allPosts.filter((category) => category.category === "Accessibility")

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
        <section className="mt-16 mb-32">
          <PostGrid posts={posts} />
        </section>
      </Container>
    </Layout >
  )
}

export default Accessibility

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
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