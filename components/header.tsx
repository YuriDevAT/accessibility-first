import Link from 'next/link'

type Props = {
  tags: string
  category: string
}

const Header = ({ tags, category }: Props) => {
  return (
    <>
      <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 inline-block">
        <Link href="/" className="hover:underline">
          {tags}
        </Link>
        .
      </div>
      <div className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ml-2 inline-block ${category == "Accessibility" ? "text-blue-800" : "text-purple-800"}`}>
        <Link href="/" className="hover:underline">
          {category}
        </Link>
        .
      </div>
    </>
  )
}

export default Header