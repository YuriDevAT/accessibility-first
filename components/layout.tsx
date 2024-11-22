import Alert from './alert';
import Footer from './footer';
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
      <Alert />
      <div className="min-h-screen">
        <main className="mb-28">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
