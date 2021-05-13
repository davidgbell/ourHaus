import Link from 'next/link';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { API_URL } from '../config';

export default function Home({ houses }) {
  return (
    <Layout title='Home'>
      <h1 className='title'>House's where memories are made</h1>
      <div className='featured'>
        <h2>Featured Properties</h2>
        <div className='grid'>
          {houses.length > 0 &&
            houses.map(house => <HouseItem house={house} key={house.id} />)}
        </div>

        {houses.length > 0 && (
          <Link href='/houses'>
            <a className='btn' aria-label='Access all properties'>
              See All Properties
            </a>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/houses?featured=true&_limit=2`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
