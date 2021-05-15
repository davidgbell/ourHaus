import Image from 'next/image';
import Link from 'next/link';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { Search } from '../components/Search';
import { API_URL } from '../config';

export default function Home({ houses }) {
  return (
    <Layout title='Home'>
      <div className='intro'>
        <div>
          <h1 className='titleBravo'>More than just homes</h1>
          <p>Let's find a home thats perfect for you</p>
        </div>
        <Search />
      </div>
      <div className='feature'>
        <Image src='/images/room-4.jpg' alt='flats' width={500} height={400} />
        <div className='feature-text'>
          <h3 className='titleBravo'>House or Apartment?</h3>
          <p>
            We offer a range of houses and apartments. Catered to your needs.{' '}
          </p>
        </div>
      </div>
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
