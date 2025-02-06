import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { webinars } from '../data/webinars';

const title = 'Accessibility Webinar Series';

const WebinarSeries = () => {
  const { t } = useTranslation('webinar');

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
          <p className="text-xl leading-relaxed my-6">{t('p1')}</p>
          <p className="text-xl leading-relaxed my-6">{t('p2')}</p>
          <p className="text-xl leading-relaxed my-6">{t('p3')}</p>
          <a
            href="https://gdg.community.dev/gdg-vienna/"
            className="block text-lg underline text-slate-950 dark:text-white"
          >
            GDG Vienna Community Page
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Flh9z92zGsUfsyJPSLOzFbOYucvOVRT5?usp=sharing"
            className="block text-lg underline text-slate-950 dark:text-white"
          >
            Google Drive Resources Folder
          </a>
          <ul className="text-lg leading-relaxed my-6 dark:text-slate-800">
            {webinars.map((webinar) => (
              <li
                key={webinar.date}
                className="bg-blue-200 border-t-8 border-blue-800 py-1 px-4 my-3"
              >
                <h2 className="text-2xl mt-6 mb-4 leading-snug font-semibold dark:text-inherit">
                  {webinar.title}
                </h2>
                <p className="mb-4 font-mono text-lg">
                  {webinar.date} {webinar.time}
                </p>
                <a
                  className={`mb-4 text-lg block ${
                    webinar.event ? 'underline text-blue-800' : 'text-slate-950'
                  }`}
                  href={webinar.event}
                >
                  Register to {webinar.title}
                </a>
                <a
                  className={`mb-4 text-lg block ${
                    webinar.slides
                      ? 'underline text-blue-800'
                      : 'text-slate-950'
                  }`}
                  href={webinar.slides}
                >
                  Slides: {webinar.title}
                </a>
                <a
                  className={`mb-4 text-lg block ${
                    webinar.video ? 'underline text-blue-800' : 'text-slate-950'
                  }`}
                  href={webinar.video}
                >
                  Recording {webinar.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  );
};

export default WebinarSeries;
