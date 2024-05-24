import { useRouter } from 'next/router';
import Link from 'next/link';

const LocaleToggle = () => {
  const { locales, asPath, locale: currentLocale } = useRouter();

  return (
    <ul>
      {locales?.map((loc, index) => (
        <li key={loc} className="inline-block mr-1">
          <Link
            id="i18n-btn"
            href={asPath}
            locale={loc}
            className={currentLocale === loc ? 'underline' : ''}
          >
            {loc.toUpperCase()}
          </Link>
          {index < locales.length - 1 && ' | '}
        </li>
      ))}
    </ul>
  );
};

export default LocaleToggle;
