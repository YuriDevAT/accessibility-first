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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        id="menubutton" 
        onClick={toggleDropdown}
        className="px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:outline before:content-language dark:before:content-language-dark before:w-3 before:h-full before:mr-4 before:flex flex items-center"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="menu"
        aria-label="Select Language"  
      >
        {languageNames[currentLocale as LocaleCode]}
      </button>

      {isOpen && (
        <ul id="menu"  role="menu" aria-labelledby="menubutton" className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg w-full text-center">
          {locales?.map((loc, index) => (
            <li role="presentation" key={loc} className="block mb-3">
              <Link
                href={asPath}
                locale={loc}
                scroll={false}
                role="menuitem"
                onClick={closeDropdown}
                className={`block px-4 py-2 text-sm focus:outline outline-inherit outline-inset-2 ${
                  currentLocale === loc
                    ? 'font-bold underline'
                    : 'text-gray-700 dark:text-gray-300'
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                <span lang={loc}>{languageNames[loc as LocaleCode]}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocaleToggle;
