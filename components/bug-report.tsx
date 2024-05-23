import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link'

export function BugReport() {
  const { t } = useTranslation('bug-report');

  return (
    <div className="mb-3 before:content-bug dark:before:content-bug-dark before:inline-block before:w-3 before:h-full before:mr-1 flex items-center">
      <Link id="reportBug-btn" href="https://github.com/YuriDevAT/website-bug-tracker#readme" target="_blank" className="outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
        {t('p1')}
        <span className="sr-only">{t('span')}</span>
      </Link>
  </div>
  )
}