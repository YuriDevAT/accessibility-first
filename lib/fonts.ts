import localFont from 'next/font/local';

export const openSauce = localFont({
  src: [
    {
      path: '../public/fonts/openSauceSans-Bold.ttf',
    },
  ],
  variable: '--font-openSauce',
});

export const openSauceBlack = localFont({
  src: [
    {
      path: '../public/fonts/openSauceSans-Black.ttf',
    },
  ],
  variable: '--font-openSauceBlack',
});

export const openSauceSemi = localFont({
  src: [
    {
      path: '../public/fonts/openSauceSans-SemiBold.ttf',
    },
  ],
  variable: '--font-openSauceSemi',
});
