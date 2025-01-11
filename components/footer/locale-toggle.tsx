import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

type LocaleCode = 'en' | 'de' | 'ja';

const languageNames: Record<LocaleCode, string> = {
  en: 'English',
  de: 'German',
  ja: 'Japanese',
};

const LocaleToggle = () => {
  const { locales, asPath, locale: currentLocale } = useRouter();
  const [announcement, setAnnouncement] = useState('');

  const handleLanguageSwitch = (loc: LocaleCode) => {
    setAnnouncement(
      `Language switched to ${loc === 'ja' ? 'nihongo' : languageNames[loc as LocaleCode]}`
    );
  };

  return (
    <>
      <ul aria-labelledby="languages">
        {locales?.map((loc) => (
          <li
            key={loc}
            className="block mb-3 focus:outline outline-inherit outline-offset-1"
          >
            <Link
              href={asPath}
              locale={loc}
              scroll={false}
              aria-current={currentLocale === loc ? 'page' : undefined}
              className={`${currentLocale === loc ? 'underline' : ''} focus:outline outline-inherit outline-offset-1`}
              aria-label={
                loc === 'ja' ? 'nihongo' : languageNames[loc as LocaleCode]
              }
              onClick={() => handleLanguageSwitch(loc as LocaleCode)}
            >
              <span lang={loc}>{languageNames[loc as LocaleCode]}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </>
  );
};

export default LocaleToggle;
