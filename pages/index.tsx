import Script from 'next/script';
import Container from '../components/container';
import MorePosts from '../components/post/more-posts';
import HeroPost from '../components/post/hero-post';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { GetStaticProps } from 'next';
import Newsletter from '../components/newsletter';
import HeroVideos from '../components/videos/hero-videos';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const blogPosts = allPosts.filter(post => post.tags.includes('Blog'));
  const videoPosts = allPosts.filter(post => post.tags.includes('Video'));

  const heroPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1, 4); 
  const morePosts = blogPosts.slice(4);

  const heroVideo = videoPosts[0];
  const otherVideos = videoPosts.slice(1, 3);

  return (
    <>
      <Layout>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
        <Head>
          <title>Accessibility First</title>
        </Head>
        <Container>
          <h1 className="sr-only">Welcome to Accessibility First</h1>
          {heroPost && (
              <HeroPost
                heroPost={heroPost}
                otherPosts={otherPosts}
              />
            )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          {heroVideo && (
              <HeroVideos
                heroVideo={heroVideo}
                otherVideos={otherVideos}
              />
            )}
          <Newsletter />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'ogPost',
    'tags',
    'author',
    'coverImage',
    'excerpt',
    'category',
    'readingTime'
  ]);

  allPosts.sort(
    (post1, post2) =>
      new Date(post2.date).getTime() - new Date(post1.date).getTime()
  );

  return {
    props: { allPosts },
  };
};
