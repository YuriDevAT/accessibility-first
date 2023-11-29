import Link from 'next/link'
import Container from './container'
import { CMS_NAME } from '../lib/constants'
import DarkModeToggle from './dark-mode-toggle'

const Footer = () => {
  return (
    <footer className="bg-purple-200 border-purple-200 dark:bg-purple-950 text-sm mt-6">
      <Container>
        <div className="flex flex-wrap justify-between py-16 mb-5">
          <h2 className="sr-only">Footer</h2>
          <Link href="/" className="w-full lg:w-4/12 mb-8">
            <span className="text-4xl dark:text-slate-200 lg:text-[2.5rem] font-bold tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:underline">
              Accessibility First
            </span>
          </Link>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Blog</h3>
            <ul className="underline">
              <li>
                <Link href="/" className="block mb-3">
                  All Articles
                  </Link>
                </li>
                <li>
                <Link href="/accessibility" className="block mb-3">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/ux-research" className="block mb-3">
                  UX Research
                </Link>
              </li>
              <li>
                <Link href="/ux-design" className="block mb-3">
                  UX Design
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="block mb-3">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/qa-testing" className="block mb-3">
                  QA Testing
                </Link>
              </li>
              <li>
                <Link href="/documents" className="block mb-3">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Organization</h3>
            <ul className="underline">
              <li>
                <Link href="/news" className="block mb-3">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="block mb-3">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="block mb-3">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="block mb-3">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className="block mb-3">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="block mb-3">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Social Media</h3>
            <ul className="underline">
              <li>
                <a href="https://www.instagram.com/accessibilityfirst/" className="block mb-3">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/accessibilityfirst/" className="block mb-3">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@accessibilityfirst" className="block mb-3">
                  YouTube
                </a>
              </li>
              <li>
                <a href="@mailto:info@accessibilityfirst.at" className="block mb-3">
                  info@accessibilityfirst.at
                </a>
              </li>
            </ul>
          </div>
          <div className="pr-4 lg:pl-6 lg:pr-0 mb-10 sm:mb-2 w-1/2 sm:w-1/4 lg:w-1/6">
            <h3 className="font-semibold mb-3 uppercase">Settings</h3>
            <ul className="underline">
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-t-1px border-purple-300 dark:border-purple-800 py-6 flex flex-wrap-reverse sm:justify-center lg:justify-between sm:items-center">
          <p>
            © 2022-{new Date().getFullYear()} Accessibility First. All rights reserved.
          </p>
          <p>
            A statically generated blog made with <span className="text-red-800">&#9829;</span> and ♫ using{' '}
            <a
              href="https://nextjs.org/"
              className="underline hover:text-blue-800 dark:text-purple-200 dark:hover:text-blue-500 duration-200 transition-colors"
            >
              Next.js
            </a>{' '}
            and {CMS_NAME}.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer