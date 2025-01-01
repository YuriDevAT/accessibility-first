import useTranslation from 'next-translate/useTranslation';
import PostPreview from './post-preview';
import type Post from '../../interfaces/post';
import Link from 'next/link';
import HeadingSeparator from '../heading-separator';

type Props = {
  posts: Post[];
};

const MorePosts = ({ posts }: Props) => {
  const { t } = useTranslation('more-posts');
  const MAX_POSTS = 6;

  return (
    <section>
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl font-semibold tracking-tight leading-tight">
          {t('h2')}
        </h2>
        <Link
          className="text-2xl mb-3 p-2 w-fit underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-4 focus:outline outline-inherit outline-offset-1 after:content-['→']"
          href="/all-posts"
        >
          {t('button')}
        </Link>
      </div>
      <HeadingSeparator />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-12">
        {posts.slice(0, MAX_POSTS).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readingTime={post.readingTime}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
