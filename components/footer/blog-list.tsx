import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { categories } from '../../data/categories';

const BlogList = () => {
  const { t } = useTranslation('footer');

  return (
    <ul aria-labelledby="blog">
      {categories.map((category) => (
        <li key={category.key}>
          <Link
            href={category.path}
            className="block mb-3 focus:outline outline-inherit outline-offset-1"
          >
            {t(`categories.${category.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
