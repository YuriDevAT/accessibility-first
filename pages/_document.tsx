import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head />
      <body className="bg-purple-300 text-purple-950 dark:bg-purple-900 dark:text-purple-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}