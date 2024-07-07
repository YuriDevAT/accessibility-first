import useTranslation from 'next-translate/useTranslation';

export function CopyRight() {
  const { t } = useTranslation('copyright');

  return (
    <div className="border-t border-t-1px border-stone-300 dark:border-slate-800 py-6 flex flex-wrap-reverse sm:justify-center lg:justify-between sm:items-center">
      <p>
        © 2022-{new Date().getFullYear()} {t('p1')}
      </p>
      <p>
        {t('p2')}
        <span className="text-red-800 font-bold">&#9829;</span>
        {t('p3')}
        <a
          href="https://juliaundeutsch.com/"
          className="underline hover:text-blue-800 dark:text-slate-200 dark:hover:text-blue-500 duration-200 transition-colors focus:outline outline-inherit outline-offset-1"
        >
          Julia Undeutsch
        </a>
        {t('p4')}
        <a
          href="https://www.linkedin.com/in/sailorjohnny/"
          className="underline hover:text-blue-800 dark:text-slate-200 dark:hover:text-blue-500 duration-200 transition-colors focus:outline outline-inherit outline-offset-1"
        >
          Yan Kurochin
        </a>
        {t('p5')}
      </p>
    </div>
  );
}
