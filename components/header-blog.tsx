import Link from 'next/link'

const HeaderBlog = () => {
  return (
    <>
      <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 inline-block">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </div>
      <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ml-2 inline-block">
        <Link href="/" className="hover:underline">
          UX Research
        </Link>
        .
      </div>
    </>
  )
}

export default HeaderBlog