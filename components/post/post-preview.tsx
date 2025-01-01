import Avatar from './avatar';
import DateFormatter from '../date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../../interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] md:gap-x-4 gap-y-2 border-slate-500 border-b [&:nth-last-child(-n+2)]:border-b-0">
      <div className="mb-5 h-44 w-44 bg-red-200">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col mb-12">
        <h3 className="text-xl mb-3 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none focus:outline outline-inherit outline-offset-1 decoration-2"
          >
            {title}
          </Link>
        </h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <p className="ml-4 font-mono text-lg dark:text-slate-200">
            <DateFormatter dateString={date} />
          </p>
        </div>
      </div>
    </div>
    
  );
};



export default PostPreview;
