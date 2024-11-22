import useTranslation from 'next-translate/useTranslation';

export function CopyRight() {
  const { t } = useTranslation('copyright');

  return (
    <div className="border-t border-t-1px border-purple-200 dark:border-purple-200 py-6 flex flex-wrap-reverse sm:justify-center lg:justify-between sm:items-center text-purple-200">
      <p>
        © 2022-{new Date().getFullYear()} {t('p1')}
      </p>
      <p>
        {t('p2')}
        <span className="text-red-800 font-bold">&#9829;</span>
        {t('p3')}
        <a
          href="https://juliaundeutsch.com/"
          className="underline hover:text-white dark:text-purple-200 dark:hover:text-white duration-200 transition-colors focus:outline outline-inherit outline-offset-1"
        >
          Julia Undeutsch<span className="sr-only">{t('julia')}</span>
        </a>
        {t('p4')}
        <a
          href="https://www.linkedin.com/in/sailorjohnny/"
          className="underline hover:text-white dark:text-purple-200 dark:hover:text-white duration-200 transition-colors focus:outline outline-inherit outline-offset-1"
        >
          Yan Kurochin<span className="sr-only">{t('yan')}</span>
        </a>
        {t('p5')}
      </p>
    </div>
  );
}
