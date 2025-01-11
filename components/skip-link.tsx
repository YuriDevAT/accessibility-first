import useTranslation from 'next-translate/useTranslation';

const SkipLink = () => {
  const { t } = useTranslation('skip-link');

  return (
    <nav>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:outline outline-inherit outline-offset-1"
      >
        {t('a2')}
      </a>
    </nav>
  );
};

export default SkipLink;
