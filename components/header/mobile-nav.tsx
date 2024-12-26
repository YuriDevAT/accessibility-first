import Link from 'next/link';
import Search from './search';
import useTranslation from 'next-translate/useTranslation';
import { navCategories } from '../../data/nav-categories';
import { nav } from '../../data/nav';

const MobileNav = () => {
    const { t: tMain } = useTranslation('main-navigation');
    const { t: tSecond } = useTranslation('second-navigation');

  return (
    <nav aria-label="mobile">
      <ul className="flex flex-col space-y-2 items-center">
        {nav.map((item) => (
          <li key={item.key}>
            <Link
              href={item.path}
              className="block focus:outline outline-inherit outline-offset-1 px-6"
            >
              {tMain(`links.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border divide-solid border-gray-300 w-full m-2" />
      <ul className="flex flex-col space-y-2 items-center">
        {navCategories.map((item) => (
          <li key={item.key}>
            <Link
              href={item.path}
              className="block focus:outline outline-inherit outline-offset-1 px-6"
            >
              {tSecond(`categories.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
