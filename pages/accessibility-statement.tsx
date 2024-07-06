import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Container from '../components/container';
import Head from 'next/head';

const title = 'Accessibility Statement';

const AccessibilityStatement = () => {
  const { t } = useTranslation('accessibility-statement');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {t('title')}
        </h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <p className="text-lg leading-relaxed my-6">{t('p1')}</p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold">
            {t('h2-1')}
          </h2>
          <p className="text-lg leading-relaxed my-6">{t('p2')}</p>
          <ul className="text-lg leading-relaxed my-6 list-disc list-inside">
            <li>{t('li1')}</li>
            <li>{t('li2')}</li>
            <li>{t('li3')}</li>
            <li>{t('li4')}</li>
            <li>{t('li5')}</li>
            <li>{t('li6')}</li>
          </ul>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold">
            {t('h2-2')}
          </h2>
          <p className="text-lg leading-relaxed my-6">
            {t('p3')}
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
              {t('a1')}
            </a>
            {t('p4')}
          </p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold">
            {t('h2-3')}
          </h2>
          <p className="text-lg leading-relaxed my-6">{t('p5')}</p>
          <ul className="text-lg leading-relaxed my-6">
            <li>
              {t('li7')}
              <a
                href="https://www.linkedin.com/company/accessibilityfirst/"
                className="underline"
              >
                {t('a2')}
              </a>
            </li>
            <li>
              {t('li8')}
              <a
                href="https://www.instagram.com/accessibilityfirst/"
                className="underline"
              >
                {t('a3')}
              </a>
            </li>
          </ul>

          <p className="text-lg leading-relaxed my-6">{t('p6')}</p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold">
            {t('h2-4')}
          </h2>
          <p className="text-lg leading-relaxed my-6">
            {t('p7')}
            <a
              href="https://www.w3.org/WAI/planning/statements/"
              className="underline"
            >
              {t('a4')}
            </a>
            {t('p8')}
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default AccessibilityStatement;
