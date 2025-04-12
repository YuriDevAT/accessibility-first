import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

const Meta = ({
  title = 'Accessibility First',
  description = 'Accessibility First is a collection of insights, learnings, and experiences from industry professionals / leaders to spread awareness and help you eradicate invisible barriers.',
  image = HOME_OG_IMAGE_URL,
  url = 'https://accessibilityfirst.at',
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
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
      <title>{title}</title>
      <meta name="apple-mobile-web-app-title" content="Accessibility First" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="msapplication-TileColor" content="#0C0A09" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('theme-color' in document.createElement('meta')) {
              const meta = document.createElement('meta');
              meta.name = 'theme-color';
              meta.content = '#084FD4';
              document.head.appendChild(meta);
            }
          `,
        }}
      />
    </Head>
  );
};

export default Meta;
