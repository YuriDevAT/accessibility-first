import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";

const title = "Team"

const Team = () => {
  const { t } = useTranslation('documents');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{t('title')}</h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <ul>
            <li className="flex flex-col md:flex-row items-center gap-x-8 mb-16 md:mb-0">
              <Image
                className="h-64 w-64 rounded-full block object-cover"
                src="/assets/authors/julia.jpg"
                alt="Julia Undeutsch"
                width="49"
                height="49"
              />
              <div>
                <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
                {t('h2-1')}
                </h2>
                <p className="mb-4 font-mono text-lg text-center md:text-left dark:text-slate-200">
                {t('p1')}
                </p>
                <p className="text-lg leading-relaxed my-6">
                {t('p2')}
                </p>
                <p className="text-lg leading-relaxed my-6">
                {t('p3')}
                  <a href="https://www.accessibilityassociation.org/s/certified-professional" className="underline dark:text-slate-200">{t('a1')}</a>{t('p4')}<a href="https://developers.google.com/community/experts" className="underline dark:text-slate-200">{t('a2')}</a>{t('p5')}
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-x-8">
              <Image
                className="h-64 w-64 rounded-full"
                src="/assets/authors/laura.jpg"
                alt=""
                width="49"
                height="49"
              />
              <div>
                <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
                {t('h2-2')}
                </h2>
                <p className="mb-4 font-mono text-lg text-center md:text-left dark:text-slate-200">
                {t('p6')}
                </p>
                <p className="text-lg leading-relaxed my-6">
                {t('p7')}
                </p>
                <p className="text-lg leading-relaxed my-6">
                {t('p8')}
                  <br />
                  <a href="https://www.laura-wissiak.com/" className="underline dark:text-slate-200"><span className="sr-only">{t('span1')}</span>{t('a3')}</a>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </Layout >
  )
}

export default Team