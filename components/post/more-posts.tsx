import useTranslation from 'next-translate/useTranslation';
import PostPreview from './post-preview';
import type Post from '../../interfaces/post';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const MorePosts = ({ posts }: Props) => {
  const { t } = useTranslation('more-posts');
  const MAX_POSTS = 8;

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {t('h2')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-28 mb-32">
        {posts.slice(0, MAX_POSTS).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <Link
        className="block mb-3 p-2 w-fit text-2xl underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-4 focus:outline outline-inherit outline-offset-1 after:content-['→']"
        href="/all-posts"
      >
        {t('button')}
      </Link>
    </section>
  );
};

export default MorePosts;
