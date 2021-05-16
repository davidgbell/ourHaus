import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { API_URL } from '../config';

const sale = ({ houses }) => {
  return (
    <Layout title='Sale'>
      <h1 className='title'>Homes for sale</h1>
      <div className='page-wrapper'>
        {houses?.map(house => (
          <HouseItem key={house.id} house={house} />
        ))}
      </div>
    </Layout>
  );
};

export default sale;

export const getStaticProps = async () => {
  // houses that are set for sale from CMS
  const res = await fetch(`${API_URL}/houses?type=sale`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
