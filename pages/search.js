import Link from 'next/link';
import qs from 'qs';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { API_URL } from '../config';

const searchPage = ({ houses }) => {
  <Link href='/houses'>Back to houses</Link>;
  return (
    <Layout title='Search results for houses'>
      <h1 className='title'>Search page</h1>
      {houses.length === 0 && (
        <h3>No houses available to rent or buy with your search term</h3>
      )}

      {houses.map(house => (
        <HouseItem key={house.id} house={house} />
      ))}
    </Layout>
  );
};

export default searchPage;

export const getServerSideProps = async ({ query: { searchTerm } }) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: searchTerm },
        { city_contains: searchTerm },
        { address_contains: searchTerm },
      ],
    },
  });

  const res = await fetch(`
        ${API_URL}/houses?${query}`);
  const houses = await res.json();

  return {
    props: {
      houses,
    },
  };
};
