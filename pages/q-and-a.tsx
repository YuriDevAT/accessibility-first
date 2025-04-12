import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { QAItem } from '../@types/q-and-a';
import { qaData } from '../data/q-and-a';

const title = 'Q&A';

const colorSchemes = [
  { bg: 'bg-lime-100', text: 'text-lime-700', border: 'border-t-lime-700' },
  { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-t-sky-800' },
  {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-t-yellow-700',
  },
  {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    border: 'border-t-orange-700',
  },
  {
    bg: 'bg-fuchsia-100',
    text: 'text-fuchsia-800',
    border: 'border-t-fuchsia-800',
  },
];

const QandA = () => {
  const { t } = useTranslation('q-and-a');

  const qAndA: QAItem[] = qaData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h2 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {t('title')}
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3  gap-8">
          {qAndA.map((item, index) => {
            const color = colorSchemes[index % colorSchemes.length];
            return (
              <div
                key={item.question}
                className={`mb-8 rounded-lg shadow-sm break-inside-avoid overflow-hidden ${color.bg}`}
              >
                <div className="p-4">
                  <h3 className={`text-2xl font-semibold mb-2 ${color.text}`}>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 text-lg whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
                <hr className={`w-3/4 m-auto border-t-2 ${color.border}`} />
                <div className="flex items-center p-4 justify-end">
                  <p className={`font-medium mr-3 ${color.text}`}>
                    {item.speaker}
                  </p>
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={
                      item.speaker === 'Julia'
                        ? '/assets/authors/julia.png'
                        : item.speaker === 'Laura'
                          ? '/assets/authors/laura.png'
                          : '/assets/authors/default.png'
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default QandA;
