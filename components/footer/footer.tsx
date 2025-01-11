import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Container from '../container';
import { CopyRight } from './copyright';
import BlogList from './blog-list';
import SocialsList from './socials-list';
import Logo from './logo';
import OrganizationList from './organization-list';
import LocaleToggle from './locale-toggle';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-stone-200 border-stone-200 dark:bg-slate-950 text-sm mt-6 font-body">
      <Container>
        <div className="flex flex-wrap justify-between py-16 mb-5">
          <h2 className="sr-only">Footer</h2>
          <Link
            href="/"
            className="w-full lg:w-4/12 mb-8 flex lg:block focus:outline outline-inherit outline-offset-1"
          >
            <span className="text-4xl dark:text-slate-200 lg:text-[2.5rem] font-bold tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:underline font-title">
              Accessibility First
            </span>
            <Logo />
          </Link>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase" id="blog">
              {t('h3-1')}
            </h3>
            <BlogList />
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase" id="organization">
              {t('h3-2')}
            </h3>
            <OrganizationList />
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase" id="socials">
              {t('h3-3')}
            </h3>
            <SocialsList />
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase" id="languages">
              {t('h3-4')}
            </h3>
            <LocaleToggle />
          </div>
        </div>
        <CopyRight />
      </Container>
    </footer>
  );
};

export default Footer;
