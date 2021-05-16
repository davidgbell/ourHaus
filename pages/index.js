import Image from 'next/image';
import Link from 'next/link';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { Search } from '../components/Search';
import { API_URL } from '../config';

export default function Home({ houses }) {
  return (
    <Layout title='Home'>
      <section className='intro'>
        <div>
          <h1 className='titleBravo'>More than just homes</h1>
          <p>Let's find a home thats perfect for you</p>
        </div>
        <Search />
      </section>
      <section className='feature'>
        <Image src='/images/room-4.jpg' alt='flats' width={500} height={400} />
        <div className='feature-text'>
          <h3 className='titleBravo'>House or Apartment?</h3>
          <p>
            We offer a range of houses and apartments. Catered to your needs.{' '}
          </p>
        </div>
      </section>
      <section className='featured'>
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
      </section>
      <section className='feature-two'>
        <div className='feature-two-text'>
          <h3 className='titleBravo'>Leading standards since 2003</h3>
          <p>
            Our brokers are experts at finding a place anyone can make memories
            in.
          </p>
        </div>
        <Image src='/images/room-2.jpg' alt='flats' width={300} height={400} />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get first 3 houses that have the featured attribute
  const res = await fetch(`${API_URL}/houses?featured=true&_limit=3`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
