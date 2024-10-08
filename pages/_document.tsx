import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import Meta from '../components/meta';

interface MyDocumentProps extends DocumentInitialProps {
  locale: string;
}

const MyDocument = ({ locale }: MyDocumentProps) => {
  return (
    <Html lang={locale}>
      <Head>
        <Meta />
      </Head>
      <body className="bg-stone-50 text-stone-950 dark:bg-slate-800 dark:text-slate-400 font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<MyDocumentProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  const { locale } = ctx;

  return { ...initialProps, locale: locale || 'en' };
};

export default MyDocument;
