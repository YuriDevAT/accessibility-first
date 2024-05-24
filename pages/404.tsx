import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';

const title = 'Oh oh.. page not found';

const Custom404 = () => {
  const { t } = useTranslation('404');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <section className="mt-16 mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
            {t('title')}
          </h1>
          <p className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center">
            {t('p1')}
            <Link href="/" className="text-blue-800 dark:text-blue-500">
              {t('p2')}
            </Link>
            {t('p3')}
          </p>
          <Image
            src={'/assets/coming-soon.png'}
            className="m-auto"
            width={250}
            height={250}
            alt=""
          />
        </section>
      </Container>
    </Layout>
  );
};

export default Custom404;
