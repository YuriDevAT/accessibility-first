import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import categoryColors from '../../lib/colors';
import categoryPaths from '../../lib/paths';

type Props = {
  tags: string;
  category: string;
};

const Header = ({ tags, category }: Props) => {
  const { t } = useTranslation('header');
  const categoryColorsClass: string = categoryColors[category] || '';
  const categoryUrl: string = categoryPaths[category] || `/${category}`;

  return (
    <nav aria-label={t('label')} id="breadcrumb">
      <div className="text-2xl dark:text-slate-200 md:text-4xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 inline-block font-heading">
        <Link
          href="/"
          className="hover:underline focus:outline outline-inherit outline-offset-1"
        >
          {tags}
        </Link>
        .
      </div>
      <div
        className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ml-2 inline-block ${categoryColorsClass} font-heading`}
      >
        <Link
          href={categoryUrl}
          className={`hover:underline focus:outline outline-inherit outline-offset-1 ${categoryColorsClass}`}
        >
          {category}
        </Link>
        .
      </div>
    </nav>
  );
};

export default Header;
