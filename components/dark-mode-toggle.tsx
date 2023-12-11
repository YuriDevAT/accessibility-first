import { useEffect, useState, useRef } from "react";

const DarkModeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleFocusChange = () => {
      if (selectRef.current && !selectRef.current.contains(document.activeElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusin', handleFocusChange);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('focusin', handleFocusChange);
    }

  }, []);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  }

  const handleLight = () => {
    document.documentElement.classList.remove("dark");
    setIsOpen(false);
  }

  const handleDark = () => {
    document.documentElement.classList.add("dark");
    setIsOpen(false);
  }

  return (
    <>
      <div ref={selectRef} className="relative">
        <button type="button" id="theme-btn" aria-haspopup="menu" aria-expanded="false" aria-controls="theme-menu" onClick={handleOpenSelect} className="flex items-center before:inline-block before:w-6 before:h-6 before:mr-2 dark:before:content-dark-mode before:content-light">
          <span>
            <span className="sr-only">Change </span>
            Theme
          </span>
        </button>
        {isOpen && (
          <ul id="theme-menu" className="block absolute left-0 top-3 bg-stone-200 dark:bg-slate-950 z-50 rounded-lg ring-1 ring-slate-900/10 dark:ring-slate-400 shadow-lg overflow-hidden w-36 py-1 text-sm dark:highlight-white/5 mt-4">
            <li className="p-2 hover:bg-slate-600/30">
              <button type="button" onClick={handleLight} className="flex items-center before:content-light before:inline-block before:w-6 before:h-6 before:mr-2 dark:before:content-light-mode w-full">
                <span>Light
                </span>
              </button>
            </li>
            <li className="p-2 hover:bg-slate-600/30">
              <button type="button" onClick={handleDark} className="flex items-center before:content-dark before:inline-block before:w-6 before:h-6 before:mr-2 dark:before:content-dark-mode w-full">
                <span>Dark
                </span>
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default DarkModeToggle