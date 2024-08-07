import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';

const title = 'Sitemap';

const SiteMap = () => {
  const { t } = useTranslation('sitemap');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <section className="mt-16 mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            {t('title')}
          </h1>
          <p className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            {t('p1')}
          </p>
          <Image
            src={'/assets/coming-soon.png'}
            width={250}
            height={250}
            alt=""
          />
        </section>
      </Container>
    </Layout>
  );
};

export default SiteMap;
