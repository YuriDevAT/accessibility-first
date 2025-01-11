import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Newsletter = () => {
  const { t } = useTranslation('newsletter');

  return (
    <section className="mb-32 sm:p-12 text-center">
      <div className="border lg:w-4/5 px-3 py-6 md:p-16 mx-auto h-auto">
        <h2 className="text-4xl mb-4">{t('h')}</h2>
        <p className="text-lg mb-8">
          {t('p-1')}
          <br />
          {t('p-2')}
        </p>
        <div className="p-4">
          <Link
            href="https://a11ynews.substack.com/"
            className="bg-purple-500 p-3 inline-block focus:outline dark:outline-white outline-slate-950 outline-offset-1 text-slate-950"
          >
            {t('a')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
