import useTranslation from 'next-translate/useTranslation';
import HeadingSeparator from '../heading-separator';
import CoverImage from '../post/cover-image';
import Link from 'next/link';

type PostProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  ogPost: {
    url: string;
  };
};

type HeroPostProps = {
  heroVideo: PostProps;
  otherVideos: PostProps[];
};

const HeroVideos = ({ heroVideo, otherVideos }: HeroPostProps) => {
  const { title, coverImage, excerpt, ogPost } = heroVideo;
  const { t } = useTranslation('video');

  return (
    <section className="my-32">
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl font-semibold tracking-tight leading-tight">
          {t('h2')}
        </h2>
        <Link
          className="text-2xl mb-3 p-2 w-fit underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-4 focus:outline outline-inherit outline-offset-1 after:content-['→']"
          href="https://www.youtube.com/@yuridevat/playlists"
        >
          {t('button')}
        </Link>
      </div>
      <HeadingSeparator />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] lg:gap-x-16 gap-y-20 lg:gap-y-28 mb-32">
        <div>
          <div className="mb-8">
            <CoverImage src={coverImage} />
          </div>
          <h2 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`${ogPost.url}`}
              href={`${ogPost.url}`}
              className="underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-2 focus:outline outline-inherit outline-offset-1"
            >
              {title}
            </Link>
          </h2>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>

        <div className="flex flex-col gap-8">
          {otherVideos.map((video) => (
            <div
              key={video.title}
              className=" border-slate-500 border-b last:border-b-0 pb-2"
            >
              <div className="mb-5 bg-red-200">
                <CoverImage src={video.coverImage} />
              </div>
              <div className="mb-6">
                <h2 className="text-xl mb-3 leading-snug">
                  <Link
                    as={`${video.ogPost.url}`}
                    href={`${video.ogPost.url}`}
                    className="underline transition-all duration-300 ease-in-out hover:decoration-4 motion-reduce:hover:transition-none decoration-1 focus:outline outline-inherit outline-offset-1"
                  >
                    {video.title}
                  </Link>
                </h2>
                <p className="text-lg leading-relaxed mb-4">{video.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideos;
