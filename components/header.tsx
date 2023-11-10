import Link from 'next/link'
import categoryColors from '../lib/colors';

type Props = {
  tags: string
  category: string
}

const Header = ({ tags, category }: Props) => {
  const categoryColorsClass: string = categoryColors[category] || '';

  return (
    <>
      <div className="text-2xl dark:text-slate-200 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 inline-block">
        <Link href="/" className="hover:underline ">
          {tags}
        </Link>
        .
      </div>
      <div className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ml-2 inline-block ${categoryColorsClass}`}>
        <Link href="/" className="hover:underline">
          {category}
        </Link>
        .
      </div>
    </>
  )
}

export default Header