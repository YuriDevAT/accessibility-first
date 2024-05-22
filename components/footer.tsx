import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import Container from './container'
import DarkModeToggle from './dark-mode-toggle'

const Footer = () => {
  const { locales, asPath } = useRouter();

  return (
    <footer className="bg-stone-200 border-stone-200 dark:bg-slate-950 text-sm mt-6">
      <Container>
        <div className="flex flex-wrap justify-between py-16 mb-5">
          <h2 className="sr-only">Footer</h2>
          <Link href="/" className="w-full lg:w-4/12 mb-8 flex lg:block outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
            <span className="text-4xl dark:text-slate-200 lg:text-[2.5rem] font-bold tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:underline">
              Accessibility First
            </span>
            <Image src="/assets/logo.png" alt="" width="125" height="125" className="hidden xs:block w-12 h-12 ml-2 lg:w-32 lg:h-32 lg:ml-0" />
          </Link>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Blog</h3>
            <ul className="underline">
              <li>
                <Link href="/" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  All Articles
                  </Link>
                </li>
                <li>
                <Link href="/accessibility" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/ux-research" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  UX Research
                </Link>
              </li>
              <li>
                <Link href="/ux-design" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  UX Design
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/qa-testing" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  QA Testing
                </Link>
              </li>
              <li>
                <Link href="/documents" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Organization</h3>
            <ul className="underline">
              <li>
                <Link href="/news" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Social Media</h3>
            <ul className="underline">
              <li>
                <a href="https://www.instagram.com/accessibilityfirst/" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/accessibilityfirst/" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="www.youtube.com/@yuridevat" className="block mb-3 outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Settings</h3>
            <ul>
              <li className="mb-3">
                <DarkModeToggle />
              </li>
              <li className="mb-3 before:content-bug dark:before:content-bug-dark before:inline-block before:w-3 before:h-full before:mr-1 flex items-center">
                <Link id="reportBug-btn" href="https://github.com/YuriDevAT/website-bug-tracker#readme" target="_blank" className="outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">Report bug<span className="sr-only"> opens in a new tab</span></Link>
              </li>
              <li>
                {locales?.map((loc, index) => (
                  <Fragment key={loc}>
                    <Link id="i18n-btn" href={asPath} locale={loc}>
                      {loc.toUpperCase()}
                    </Link>
                    {index < locales.length - 1 && ' | '}
                </Fragment>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-t-1px border-stone-300 dark:border-slate-800 py-6 flex flex-wrap-reverse sm:justify-center lg:justify-between sm:items-center">
          <p>
            © 2022-{new Date().getFullYear()} Accessibility First. All rights reserved.
          </p>
          <p>
            A blog made with <span className="text-red-800">&#9829;</span> and ♫ using{' '}
            <a
              href="https://juliaundeutsch.com/"
              className="underline hover:text-blue-800 dark:text-slate-200 dark:hover:text-blue-500 duration-200 transition-colors outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200"
            >
              Julia Undeutsch,
            </a>{' '}
            cute images by <a href="https://www.linkedin.com/in/sailorjohnny/" className="underline hover:text-blue-800 dark:text-slate-200 dark:hover:text-blue-500 duration-200 transition-colors  outline-none focus:ring focus:ring-slate-950 dark:focus:ring-slate-200">Yan Kurochin</a>.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer