import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../interfaces/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <article>
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <PostTitle>{post.title}</PostTitle>
        {/* Render post content */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = getPostBySlug(locale!, params!.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'de', 'jp'];
  let paths: any[] = [];

  locales.forEach(locale => {
    const posts = getAllPosts(locale, ['slug']);
    const localePaths = posts.map(post => ({
      params: { slug: post.slug },
      locale,
    }));
    paths = [...paths, ...localePaths];
  });

  return {
    paths,
    fallback: false,
  };
};
