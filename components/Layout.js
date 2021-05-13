import Head from 'next/head';

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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>HEADER</header>
      <div className='container'>{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
};