import { ReactNode } from 'react'

type Props = {
  ogPost: string
}

const PostOriginal = ({ ogPost }: Props) => {
  return (
    <p className="text-lg italic tracking-tighter leading-tight mb-12 text-right">
      This article was originally published at{' '}
      <a className="underline" href={ogPost}>laura-wissiak.com/blog</a>
    </p>
  )
}

export default PostOriginal