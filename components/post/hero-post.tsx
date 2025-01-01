import Avatar from './avatar';
import DateFormatter from '../date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../../interfaces/author';
import ReadingTime from './reading-time';

type PostProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category: string;
  readingTime: number;
};

type HeroPostProps = {
  heroPost: PostProps;
  otherPosts: PostProps[];
};

const HeroPost = ({ heroPost, otherPosts }: HeroPostProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    category,
    readingTime,
  } = heroPost;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-20 md:gap-y-28 mb-32">
      <div>
        <div className="mb-8">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <h2 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-2 focus:outline outline-inherit outline-offset-1"
          >
            {title}
          </Link>
        </h2>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center">
          <Avatar name={author.name} picture={author.picture} />  
          <p className="ml-4 text-lg font-mono font-light dark:text-slate-200">
            <DateFormatter dateString={date} />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {otherPosts.map((post) => (
          <div key={post.slug} className="grid grid-cols-1 md:grid-cols-[auto,1fr] md:gap-x-4 gap-y-2 border-slate-500 border-b last:border-b-0">
            <div className="mb-5 h-44 w-44 bg-red-200">
              <CoverImage slug={post.slug} title={post.title} src={post.coverImage} />
            </div>
            <div className="mb-6">
              <h2 className="text-xl mb-3 leading-snug">
                <Link
                  as={`/posts/${post.slug}`}
                  href="/posts/[slug]"
                  className="underline transition-all duration-300 ease-in-out hover:decoration-4 motion-reduce:hover:transition-none decoration-1 focus:outline outline-inherit outline-offset-1"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm font-mono mb-2 text-gray-500 dark:text-slate-400">
                <DateFormatter dateString={post.date} /> · <ReadingTime time={readingTime} />
              </div>
              <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
              <Avatar name={author.name} picture={author.picture} />  
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroPost;
