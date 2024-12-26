import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { nav } from '../../data/nav';

const MainNav = () => {
  const { t } = useTranslation('main-navigation');

  return (
    <nav className="hidden md:flex" aria-labelledby="nav">
      <h2 className="sr-only" id="nav">
        {t(`label`)}
      </h2>
      <ul className="flex space-x-4 items-center">
        {nav.map((item) => (
          <li key={item.key}>
            <Link
              href={item.path}
              className="block focus:outline outline-inherit outline-offset-1 px-6"
            >
              {t(`links.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
