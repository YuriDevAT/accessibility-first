import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import PostGrid from '../components/post/post-grid';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import { GetStaticProps } from 'next';

const title = 'Accessibility';

type Props = {
  allPosts: Post[];
};

const Accessibility = ({ allPosts }: Props) => {
  const { t } = useTranslation('accessibility');
  const posts = allPosts.filter(
    (category) => category.category === 'Accessibility'
  );

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {t('title')}
        </h1>
        <section className="mt-16 mb-32">
          <PostGrid posts={posts} />
        </section>
      </Container>
    </Layout>
  );
};

export default Accessibility;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
  ]);

  allPosts.sort(
    (post1, post2) =>
      new Date(post2.date).getTime() - new Date(post1.date).getTime()
  );

  return {
    props: { allPosts },
  };
};
