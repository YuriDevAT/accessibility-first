import React from 'react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      type="button"
      className="md:hidden text-slate-700 dark:text-slate-200"
      onClick={toggleMenu}
    >
      {isOpen ? <div>Close Menu</div> : <div>Open Menu</div>}
    </button>
  );
};

export default MobileMenuButton;
