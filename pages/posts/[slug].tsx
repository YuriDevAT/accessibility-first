import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Container from '../../components/container';
import Header from '../../components/post/header';
import PostHeader from '../../components/post/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post/post-title';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../interfaces/post';
import PostBody from '../../components/post/post-body';
import PostOriginal from '../../components/post/post-original';
import SectionSeparator from '../../components/section-separator';
import Custom404 from '../404';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const { t } = useTranslation('slug');
  const router = useRouter();
  const title = `${post.title} | Accessibility First Blog Post`;
  if (!router.isFallback && !post?.slug) {
    return <Custom404 />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header tags={post.tags} category={post.category} />
        {router.isFallback ? (
          <PostTitle> {t('p')}</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                time={post.readingTime}
              />
              <PostBody content={post.content} category={post.category} />
              {post.ogPost.url != '' ? (
                <div className="max-w-2xl mx-auto">
                  <SectionSeparator />
                  <PostOriginal ogPost={post.ogPost.url} />
                </div>
              ) : null}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = getPostBySlug(locale!, params!.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'tags',
    'category',
    'content',
    'ogImage',
    'ogPost',
    'coverImage',
    'readingTime',
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

type Path = {
  params: {
    slug: string;
  };
  locale: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'de', 'ja'];
  let paths: Path[] = [];

  locales.forEach((locale) => {
    const posts = getAllPosts(locale, ['slug']) as { slug: string }[];
    const localePaths = posts.map((post) => ({
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
