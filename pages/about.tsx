import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Container from '../components/container';
import Head from 'next/head';

const title = 'Welcome to accessibility first | about';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left max-w-5xl">
          {t('welcome1')}
          <span className="text-blue-800 dark:text-blue-500">
            {t('welcome2')}
          </span>
          {t('welcome3')}
        </h1>
        <section className="mb-32 max-w-4xl">
          <p className="text-xl leading-relaxed my-6">{t('p1')}</p>
          <p className="text-xl leading-relaxed my-6">{t('p2')}</p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
            {t('h2-1')}
          </h2>
          <p className="text-lg leading-relaxed my-6">
            {t('p3')}
            <b className="uppercase">{t('b1')}</b>
          </p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
            {t('h2-2')}
          </h2>
          <p className="text-lg leading-relaxed my-6">{t('p4')}</p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
            {t('h2-3')}
          </h2>
          <p className="text-lg leading-relaxed my-6">{t('p5')}</p>
          <p className="text-lg leading-relaxed my-6">{t('p5-1')}</p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">
            {t('h3-1')}
          </h3>
          <p className="text-lg leading-relaxed my-6">{t('p6')}</p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">
            {t('h3-2')}
          </h3>
          <p className="text-lg leading-relaxed my-6">{t('p7')}</p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">
            {t('h3-3')}
          </h3>
          <p className="text-lg leading-relaxed my-6">{t('p8')}</p>
        </section>
      </Container>
    </Layout>
  );
};

export default About;
