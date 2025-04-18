import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import PostGrid from '../components/post/post-grid';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import { GetStaticProps } from 'next';

const title = 'All Posts';

type Props = {
  allPosts: Post[];
};

const AllPosts = ({ allPosts }: Props) => {
  const { t } = useTranslation('all-posts');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h2 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {t('title')}
        </h2>
        <section className="mt-16 mb-32">
          {allPosts.length > 0 ? (
            <PostGrid posts={allPosts} />
          ) : (
            <>
              <p className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {t('p')}
              </p>
              <Image
                src={'/assets/coming-soon.png'}
                width={250}
                height={250}
                alt=""
              />
            </>
          )}
        </section>
      </Container>
    </Layout>
  );
};

export default AllPosts;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
    'readingTime',
    'tags',
  ]);

  allPosts = allPosts.filter((post) => !post.tags?.includes('Video'));

  allPosts.sort(
    (post1, post2) =>
      new Date(post2.date).getTime() - new Date(post1.date).getTime()
  );

  return {
    props: { allPosts },
  };
};
