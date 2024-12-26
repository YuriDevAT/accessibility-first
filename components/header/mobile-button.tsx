import React from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button type="button" className="md:hidden text-gray-700" onClick={toggleMenu}>
      {isOpen ? <div>Close Menu</div> : <div>Open Menu</div>}
    </button>
  );
};

export default MobileMenuButton;
