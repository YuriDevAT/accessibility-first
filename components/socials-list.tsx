import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import { socials } from '../data/socials';

const SocialsList = () => {
  const { t } = useTranslation('footer');

  return (
    <ul className="underline">
      {socials.map((item) => (
        <li  key={item.key}>
          <Link
            href={item.path}
            className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200"
          >
            {t(`socials.${item.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialsList;