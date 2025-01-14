import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-10 h-10 rounded-full mr-4 object-cover"
        alt=""
        width="40"
        height="40"
      />
      <p className="text-lg font-bold dark:text-slate-200">{name}</p>
    </div>
  );
};

export default Avatar;
