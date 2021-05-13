import Head from 'next/head';
import Link from 'next/link';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { API_URL } from '../config';

export default function Home({ houses }) {
  console.log(houses);
  return (
    <Layout title='Home'>
      <h1>Hello World</h1>

      <h2>Featured Properties</h2>
      {houses.length > 0 &&
        houses.map(house => <HouseItem house={house} key={house.id} />)}

      {houses.length > 0 && (
        <Link href='/houses'>
          <a>see all properties</a>
        </Link>
      )}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/houses?featured=true`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
