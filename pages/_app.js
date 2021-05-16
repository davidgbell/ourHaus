import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

import '../styles/index.scss';

// NProgress loading state for all pages
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
