import Link from 'next/link';
import { Layout } from '../components/Layout';

// pages/404.js
export default function Custom404() {
  return (
    <Layout title='404 - Page not found'>
      <h1 className='title'>404 - Page Not Found</h1>
      <Link href='/'>
        <a className='btn'>Go back</a>
      </Link>
    </Layout>
  );
}
