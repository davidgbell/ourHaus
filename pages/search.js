import Link from 'next/link';
import qs from 'qs';

import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { Search } from '../components/Search';
import { API_URL } from '../config';

const searchPage = ({ houses, searchTerm }) => {
  <Link href='/houses'>Back to houses</Link>;
  return (
    <Layout title='Search results for houses'>
      <h1 className='title'>Search page</h1>
      {houses.length === 0 && (
        <div>
          <Search />
          <h3 className='titleBravo'>
            Nothing matches your search of "${searchTerm}"
          </h3>
        </div>
      )}

      <div className='page-wrapper'>
        {houses.length > 0 && (
          <h2 className='titleBravo'>
            Results for <strong className='searched-term'>{searchTerm}</strong>
          </h2>
        )}
        {houses.map(house => (
          <HouseItem key={house.id} house={house} />
        ))}
      </div>
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
      searchTerm,
    },
  };
};
