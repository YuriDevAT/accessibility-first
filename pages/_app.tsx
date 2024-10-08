import { AppProps } from 'next/app';
import '../styles/index.css';
import { openSauce, openSauceBlack, openSauceSemi } from '../lib/fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${openSauce.variable} ${openSauceBlack.variable} ${openSauceSemi.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
