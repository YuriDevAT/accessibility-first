import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head />
      <body className="bg-stone-50 text-stone-950 dark:bg-slate-800 dark:text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}