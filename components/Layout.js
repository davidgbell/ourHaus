import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children, title, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : 'ourHaus'}</title>
        <meta
          name='description'
          content={
            description
              ? description
              : 'ourHaus is the best place for finding luxury apartments and houses.'
          }
        />
        <meta
          name='keywords'
          content={keywords ? keywords : 'Apartments, Homes, Houses'}
        />
        <link rel='icon' href='/house.svg' />
      </Head>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
