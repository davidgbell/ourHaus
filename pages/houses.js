import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { Pagination } from '../components/Pagination';
import { API_URL, PER_PAGE } from '../config';

const houses = ({ houses, total, page }) => {
  return (
    <Layout title='Available homes'>
      <h1 className='title'>All properties</h1>
      <div className='page-wrapper'>
        {houses?.map(house => (
          <HouseItem key={house.id} house={house} />
        ))}
      </div>
      <Pagination total={total} page={page} />
    </Layout>
  );
};
export default houses;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/houses/count`);
  const total = await totalRes.json();

  const housesRes = await fetch(
    `${API_URL}/houses?_start=${start}&_limit=${PER_PAGE}`
  );
  const houses = await housesRes.json();

  return {
    props: {
      houses,
      page: +page,
      total,
    },
  };
};
