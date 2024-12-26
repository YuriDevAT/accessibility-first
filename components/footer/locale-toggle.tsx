import { useRouter } from 'next/router';
import Link from 'next/link';

type LocaleCode = 'en' | 'de' | 'ja';

const languageNames: Record<LocaleCode, string> = {
  en: 'English',
  de: 'Deutsch',
  ja: '日本語',
};

const LocaleToggle = () => {
  const { locales, asPath, locale: currentLocale } = useRouter();

  return (
    <ul aria-labelledby="languages">
      {locales?.map((loc) => (
        <li key={loc} className="block mb-3 focus:outline outline-inherit outline-offset-1">
          <Link
            href={asPath}
            locale={loc}
            scroll={false}
            className={`${currentLocale === loc ? 'underline' : ''} focus:outline outline-inherit outline-offset-1`}
          >
            <span lang={loc}>{languageNames[loc as LocaleCode]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocaleToggle;
