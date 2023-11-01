import Link from 'next/link'
import Container from './container'
import { CMS_NAME } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-stone-200 border-t border-stone-200 text-lg">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h2 className="sr-only">Footer</h2>
          <div className="xl:gap-8 xl:grid-cols-4 grid sm:grid-cols-2 gap-y-4 md:grid-cols-4 mb-4">
            <Link href="/" className="md:justify-self-end">
              <span className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:underline">
                Accessibility First
              </span>
            </Link>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Blog</h3>
              <ul className="mt-2 underline">
                <li>
                  <Link href="/" className="block py-1">
                    All articles
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="block py-1">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/ux-design" className="block py-1">
                    UX design
                  </Link>
                </li>
                <li>
                  <Link href="/web-development" className="block py-1">
                    Web development
                  </Link>
                </li>
                <li>
                  <Link href="/qa-testing" className="block py-1">
                    QA testing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Organization</h3>
              <ul className="mt-2 underline">
                <li>
                  <Link href="/about" className="block py-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="block py-1">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="block py-1">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility-statement" className="block py-1">
                    Accessibility Statement
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="block py-1">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Social Media</h3>
              <ul className="mt-2 underline">
                <li>
                  <a href="https://www.instagram.com/accessibilityfirst/" className="block py-1">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/accessibilityfirst/" className="block py-1">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@accessibilityfirst" className="block py-1">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:mt-6 border-t border-t-1px border-stone-300 py-4 text-center">
          <p className="my-5 md:pl-8">
            A statically generated blog using{' '}
            <a
              href="https://nextjs.org/"
              className="underline hover:text-blue-800 duration-200 transition-colors"
            >
              Next.js
            </a>{' '}
            and {CMS_NAME}.
          </p>
          <p>
            Made with <span className="text-red-800">&#9829;</span> and ♫ | Copyright © Accessibility First 2022-{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer