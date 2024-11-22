import { useRouter } from 'next/router';
import Link from 'next/link';

type LocaleCode = 'en' | 'de' | 'ja';

const languageNames: Record<LocaleCode, string> = {
  en: 'English',
  de: 'German',
  ja: 'Japanese',
};

const LocaleToggle = () => {
  const { locales, asPath, locale: currentLocale } = useRouter();

  return (
    <ul>
      {locales?.map((loc, index) => (
        <li key={loc} className="inline-block mr-1 text-purple-200">
          <Link
            href={asPath}
            locale={loc}
            className={`${currentLocale === loc ? 'underline' : ''} focus:outline outline-inherit outline-offset-1`}
          >
            <span className="sr-only">{languageNames[loc as LocaleCode]}</span>
            <span aria-hidden>{loc.toUpperCase()}</span>
          </Link>
          {index < locales.length - 1 && ' | '}
        </li>
      ))}
    </ul>
  );
};

export default LocaleToggle;
