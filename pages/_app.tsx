import { AppProps } from 'next/app'
import '../styles/index.css'
import localFont from '@next/font/local'

const alliance = localFont({
  src: [
    {
      path: '../public/fonts/Alliance-Light.otf',
      weight: '400'
    }
  ],
  variable: '--font-alliance'
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${alliance.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}