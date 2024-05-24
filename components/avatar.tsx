import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center mb-6 md:mb-0">
      <Image
        src={picture}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        alt={name}
        width="150"
        height="150"
      />
      <div className="text-xl font-bold dark:text-slate-200">{name}</div>
    </div>
  );
};

export default Avatar;
