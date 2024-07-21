/* eslint-disable prettier/prettier */
import useTranslation from 'next-translate/useTranslation';

type Props = {
  time: number;
};

const ReadingTime = ({ time }: Props) => {
  const { t } = useTranslation('reading-time');

  return (
    <p>
      {time}{t('p1')}{t('p2')}
    </p>
  );
};

export default ReadingTime;
