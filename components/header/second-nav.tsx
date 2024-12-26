import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { navCategories } from '../../data/nav-categories';

const SecondNav = () => {
  const { t } = useTranslation('second-navigation');

  return (
    <nav className="hidden md:block" aria-labelledby="second-nav">
      <h2 className="sr-only" id="second-nav">
        {t(`label`)}
      </h2>
      <ul className="flex justify-between text-center">
        {navCategories.map((item) => (
          <li key={item.key}>
            <Link
              href={item.path}
              className="block mb-3 focus:outline outline-inherit outline-offset-1"
            >
              {t(`categories.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondNav;
