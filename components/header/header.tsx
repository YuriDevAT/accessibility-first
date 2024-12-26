import { useState } from 'react';
import SecondNav from './second-nav';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import MobileMenuButton from './mobile-button';
import Search from './search';

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
            <div className="text-2xl mr-6 font-bold tracking-tighter leading-tight">
              Accessibility First
            </div>
            <MainNav />
          </div>
          <div>
          <MobileMenuButton
              isOpen={isMobileMenuOpen}
              toggleMenu={toggleMobileMenu}
            />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 p-4">
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
