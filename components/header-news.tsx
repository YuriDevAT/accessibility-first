import Link from 'next/link'

const HeaderNews = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        News
      </Link>
      .
    </h2>
  )
}

export default HeaderNews