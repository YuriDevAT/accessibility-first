import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/apple-touch-icon-png"
        color="#0C0A09"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="msapplication-TileColor" content="#0C0A09" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#084FD4" />
      <meta property="og:url" content="https://accessibilityfirst.at" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Accessibility First" />
      <meta property="og:description" content="Accessibility First is a collection of insights, learnings, and experiences from industry professionals / leaders to spread awareness and help you erradicate invisible barriers." />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Accessibility First is a collection of insights, learnings, and experiences from industry professionals / leaders to spread awareness and help you erradicate invisible barriers."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="accessibilityfirst.at" />
      <meta property="twitter:url" content="https://accessibilityfirst.at" />
      <meta name="twitter:title" content="Accessibility First" />
      <meta name="twitter:description" content="Accessibility First is a collection of insights, learnings, and experiences from industry professionals / leaders to spread awareness and help you erradicate invisible barriers." />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta