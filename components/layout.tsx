import Footer from './footer/footer';
import Header from './header/header';
import Meta from './meta';
import SkipLink from './skip-link';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <SkipLink />
      <Header />
      <div className="min-h-screen">
        <main id="main" className="mb-28">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
