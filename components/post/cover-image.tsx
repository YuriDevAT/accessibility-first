import cn from 'classnames';
import Image from 'next/image';

type Props = {
  src: string;
  slug?: string;
};

const CoverImage = ({ src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt=""
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200 w-full h-full object-cover':
          slug,
      })}
      width={728}
      height={410}
    />
  );

  return <div className="sm:mx-0 h-full w-full">{image}</div>;
};

export default CoverImage;
