import useTranslation from 'next-translate/useTranslation';

const SkipLink = () => {
  const { t } = useTranslation('skip-link');

  return (
    <nav aria-labelledby="skiplinks">
      <p id="skiplinks" className="sr-only">
        {t('heading')}
      </p>
      <ul className="focus-within:border-slate-950 ml-2">
        <li>
          <a
            href="#theme-btn"
            className="sr-only focus:not-sr-only focus:outline outline-inherit outline-offset-1"
          >
            {t('a1')}
          </a>
        </li>
        <li>
          <a
            href="#reportBug-btn"
            className="sr-only focus:not-sr-only focus:outline outline-inherit outline-offset-1"
          >
            {t('a2')}
          </a>
        </li>
        <li>
          {' '}
          <a
            href="#i18n-btn"
            className="sr-only focus:not-sr-only focus:outline outline-inherit outline-offset-1"
          >
            {t('a3')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SkipLink;
