import { ReactNode } from 'react'
import useTranslation from 'next-translate/useTranslation';

type Props = {
  ogPost: string
}

const PostOriginal = ({ ogPost }: Props) => {
  const { t } = useTranslation('post-original');
  const isJulia = ogPost.includes("yuridevat");

  return (
    <p className="text-lg italic tracking-tighter leading-tight mb-12 text-right">
      {t('p1')}
      <a className="underline dark:text-slate-200 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200" href={ogPost}>
        {isJulia ? 'dev.to/yuridevat' : 'laura-wissiak.com/blog'}
        </a>
    </p>
  )
}

export default PostOriginal