/* eslint-disable prettier/prettier */
import useTranslation from 'next-translate/useTranslation';

type Props = {
  time: number;
};

const ReadingTime = ({ time }: Props) => {
  const { t } = useTranslation('reading-time');

  return (
    <span className="inline-block text-sm font-mono mb-2 text-gray-500 dark:text-slate-400">
      {time}{t('p1')}{t('p2')}
    </span>
  );
};

export default ReadingTime;
