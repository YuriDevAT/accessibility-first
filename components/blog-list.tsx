import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { categories } from '../data/categories';

const BlogList = () => {
  const { t } = useTranslation('footer');

  return (
    <ul className="underline">
      {categories.map((category) => (
        <li key={category.key}>
          <Link
            href={category.path}
            className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200"
          >
            {t(`categories.${category.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
