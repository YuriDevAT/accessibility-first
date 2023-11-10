import Image from "next/image";
import { ChangeEvent, useState } from "react";

const DarkModeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEnabled(!isEnabled);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <label className={`${isEnabled ? "bg-blue-500" : "bg-blue-500 border border-black"} relative inline-flex h-[38px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
      <input
        type="checkbox"
        aria-label="use mode"
        checked={isEnabled}
        onChange={handleOnChange}
        className="opacity-0 w-0 h-0"

      />
      <div className="absolute cursor-pointer inset-0 flex justify-center">
        {isEnabled ? <Image src="assets/icons/moon.svg" alt="dark mode" height={24} width={24} /> : <Image src="assets/icons/sun.svg" alt="light mode" height={24} width={24} />}
      </div>
    </label>
  );
}

export default DarkModeToggle