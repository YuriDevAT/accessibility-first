import categoryBGColors from '../../lib/bg-colors';

type Props = {
  category: string;
};

const Category = ({ category }: Props) => {
  const categoryColorsClass: string = categoryBGColors[category] || '';

  return (
    <p className="mb-2 text-white dark:text-slate-950 italic font-semibold text-sm">
      <span className={`inline-block px-2 py-[2px] ${categoryColorsClass}`}>
        # {category}
      </span>
    </p>
  );
};

export default Category;
