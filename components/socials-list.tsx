import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { socials } from '../data/socials';

const SocialsList = () => {
  const { t } = useTranslation('footer');

  return (
    <ul className="" aria-labelledby="socials">
      {socials.map((item) => (
        <li key={item.key}>
          <Link
            href={item.path}
            className="block mb-3 focus:outline outline-inherit outline-offset-1"
          >
            {t(`socials.${item.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
