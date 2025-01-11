import { useState } from 'react';
import Link from 'next/link';
import SecondNav from './second-nav';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import MobileMenuButton from './mobile-button';
import LocaleToggle from './locale-toggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col border-b border-gray-300 text-lg">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-xl mr-6 font-medium tracking-tighter leading-tight">
              <Link
                href="/"
                aria-label="Homepage"
                className="focus:outline outline-inherit outline-offset-1 font-title"
              >
                Accessibility First
              </Link>
            </div>
            <MainNav />
          </div>
          <div>
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              toggleMenu={toggleMobileMenu}
            />
            <div className="hidden md:block text-base">
              <LocaleToggle />
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-200 dark:bg-slate-900 p-4">
            <MobileNav />
          </div>
        )}

        <div className="py-4">
          <SecondNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
