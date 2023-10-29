import Container from './container'
import { CMS_NAME } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h2 className="sr-only">Footer</h2>
          <div className="xl:gap-8 xl:grid-cols-4 grid sm:grid-cols-2 gap-y-4 md:grid-cols-4 mb-4">
            <a href="" className="md:justify-self-end">
              <span className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:text-blue-800">
                Accessibility First
              </span>
            </a>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Blog</h3>
              <ul className="mt-2">
                <li>
                  <a href="articles" className="block py-1">
                    All articles
                  </a>
                </li>
                <li>
                  <a href="accessibility" className="block py-1">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="ux-design" className="block py-1">
                    UX design
                  </a>
                </li>
                <li>
                  <a href="web-development" className="block py-1">
                    Web development
                  </a>
                </li>
                <li>
                  <a href="qa-testing" className="block py-1">
                    QA testing
                  </a>
                </li>
              </ul>
            </div>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Organization</h3>
              <ul className="mt-2">
                <li>
                  <a href="about" className="block py-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="team" className="block py-1">
                    Team
                  </a>
                </li>
                <li>
                  <a href="events" className="block py-1">
                    Events
                  </a>
                </li>
                <li>
                  <a href="accessibility-statement" className="block py-1">
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a href="sitemap" className="block py-1">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="xs:ml-4 sm:mx-auto">
              <h3 className="font-semibold m-0 uppercase">Social Media</h3>
              <ul className="mt-2">
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:mt-6 border-t border-t-1px border-slate-300 py-4 text-center text-lg ">
          <p className="my-5 md:pl-8">
            A statically generated blog using{' '}
            <a
              href="https://nextjs.org/"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Next.js
            </a>{' '}
            and {CMS_NAME}.
          </p>
          <p className="text-slate-800">
            Made with <span className="text-red-800">❤</span> and ♫ | Copyright © Accessibility First 2022-{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer