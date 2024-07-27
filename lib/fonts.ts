import localFont from 'next/font/local';

export const openSauce = localFont({
  src: [
    {
      path: '../public/fonts/OpenSauceSans-Bold.ttf',
    },
  ],
  variable: '--font-openSauce',
});

export const openSauceBlack = localFont({
  src: [
    {
      path: '../public/fonts/OpenSauceSans-Black.ttf',
    },
  ],
  variable: '--font-openSauceBlack',
});

export const openSauceSemi = localFont({
  src: [
    {
      path: '../public/fonts/OpenSauceSans-SemiBold.ttf',
    },
  ],
  variable: '--font-openSauceSemi',
});
