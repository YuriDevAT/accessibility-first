import { MouseEvent, useState } from "react";

const DarkModeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  }

  const handleLight = (e: MouseEvent<HTMLButtonElement>) => {
    document.documentElement.classList.remove("dark");
    setIsOpen(false);
  }

  const handleDark = (e: MouseEvent<HTMLButtonElement>) => {
    document.documentElement.classList.add("dark");
    setIsOpen(false);
  }

  return (
    <>
      <div className="relative">
        <button type="button" id="theme-btn" aria-haspopup="menu" aria-expanded="false" aria-controls="theme-menu" onClick={handleOnClick} className="flex items-center before:inline-block before:w-6 before:h-6 before:mr-2 dark:before:content-dark-mode before:content-light">
          <span>
            <span className="sr-only">Change </span>
            Theme
          </span>
        </button>
        {isOpen && (
          <ul id="theme-menu" className="block absolute left-0 top-3 bg-inherit z-50 rounded-lg ring-1 ring-slate-900/10 dark:ring-slate-400 shadow-lg overflow-hidden w-36 py-1 text-sm dark:highlight-white/5 mt-4">
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