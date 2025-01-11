import Image from 'next/image';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Container from '../components/container';
import Head from 'next/head';

const title = 'Welcome to Accessibility First | about';

const About = () => {
  const { t: tAbout } = useTranslation('about');
  const { t: tTeam } = useTranslation('team');

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left max-w-5xl">
          {tAbout('welcome1')}
          <span className="text-blue-800 dark:text-blue-500">
            {tAbout('welcome2')}
          </span>
          {tAbout('welcome3')}
        </h1>
        <section className="mt-20 mb-32">
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-x-16">
            <div>
              <p className="text-xl leading-relaxed mb-6">{tTeam('p2')}</p>
              <p className="text-xl leading-relaxed my-6">
                {tTeam('p3')}
                <a
                  href="https://www.accessibilityassociation.org/s/certified-professional"
                  className="underline dark:text-slate-200"
                >
                  {tTeam('a1')}
                </a>
                {tTeam('p4')}
                <a
                  href="https://developers.google.com/community/experts"
                  className="underline dark:text-slate-200"
                >
                  {tTeam('a2')}
                </a>
                {tTeam('p5')}
              </p>
              <p className="text-xl leading-relaxed mb-6">
                {tTeam('p2-1')}
                <a
                  href="https://gdg.community.dev/gdg-vienna/"
                  className="underline dark:text-slate-200"
                >
                  {tTeam('p2-2')}
                </a>
                {tTeam('p2-3')}
              </p>
            </div>
            <Image
              className="h-96 w-96 block object-cover rounded-2xl"
              src="/assets/authors/julia.jpg"
              alt=""
              width="49"
              height="49"
            />
          </div>
          <div className="mb-32">
            <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
              {tAbout('h2-1')}
            </h2>
            <div className="flex flex-col items-center lg:flex-row gap-x-16">
              <div>
                <p className="text-xl leading-relaxed my-6">{tAbout('p2')}</p>
                <p className="text-xl leading-relaxed my-6">{tAbout('p5')}</p>
                <p className="text-xl leading-relaxed my-6">{tAbout('p6')}</p>
                <p className="text-xl leading-relaxed my-6">{tAbout('p7')}</p>
              </div>
              <blockquote className="text-3xl font-bold leading-snug my-6 bg-blue-200 px-6 py-4 italic border-l-8 border-blue-800">
                {tAbout('p1')}
              </blockquote>
            </div>
            <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
              {tAbout('h2-2')}
            </h2>
            <p className="text-xl leading-relaxed mt-6">{tAbout('p4')}</p>
            <p className="text-xl leading-relaxed">{tAbout('p4-1')}</p>
            <blockquote className="text-xl leading-relaxed max-w-4xl mx-auto mt-12 bg-blue-200 px-6 py-4 italic border-l-4 border-blue-800">
              {tAbout('p3')}
              <b className="uppercase">{tAbout('b1')}</b>
            </blockquote>
          </div>
          <h2
            className="text-4xl lg:text-5xl leading-tight mb-12"
            id="contributors"
          >
            {tTeam('h2-2')}
          </h2>
          <ul
            aria-labelledby="contributors"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-y-20 lg:gap-y-28 mb-32"
          >
            <li className="items-center gap-x-8">
              <Image
                className="w-full h-56 rounded-2xl object-cover"
                src="/assets/authors/laura.jpg"
                alt=""
                width="49"
                height="49"
              />
              <div>
                <h3 className="text-xl mt-4 leading-8 font-bold text-center md:text-left">
                  {tTeam('h3-1')}
                </h3>
                <p className="font-mono leading-8 text-base text-center md:text-left dark:text-slate-200">
                  {tTeam('p6')}
                </p>
                <p className="text-xl leading-relaxed mt-4">{tTeam('p7')}</p>
                <ul className="text-xl leading-relaxed my-6 flex">
                  <li className="mr-4">
                    <a
                      href="https://www.laura-wissiak.com/"
                      className="underline dark:text-slate-200"
                    >
                      <span className="sr-only">{tTeam('span1')}</span>
                      {tTeam('a3')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/laura-wissiak/"
                      className="underline dark:text-slate-200"
                    >
                      <span className="sr-only">{tTeam('span1')}</span>
                      {tTeam('a4')}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </Layout>
  );
};

export default About;
