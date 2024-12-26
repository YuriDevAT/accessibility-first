import Avatar from './avatar';
import DateFormatter from '../date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../../interfaces/author';
import ReadingTime from './reading-time';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  time: number;
};

const PostHeader = ({ title, coverImage, date, author, time }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:flex items-center hidden md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <div className="md:ml-4 md:border-l md:border-l-black dark:md:border-l-slate-200 dark:text-slate-200 md:pl-4 font-mono text-lg">
          <DateFormatter dateString={date} />
        </div>
        <div className="md:ml-4 md:border-l md:border-l-black dark:md:border-l-slate-200 dark:text-slate-200 md:pl-4 font-mono text-lg">
          <ReadingTime time={time} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} />
        <div className="font-mono text-lg dark:text-slate-200 inline-block">
          <DateFormatter dateString={date} />
        </div>
        <div className="ml-4 border-l pl-4 border-l-black dark:border-l-slate-200 font-mono text-lg dark:text-slate-200 inline-block">
          <ReadingTime time={time} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
