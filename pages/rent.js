import { HouseItem } from '../components/HouseItem';
import { Layout } from '../components/Layout';
import { API_URL } from '../config';

const rent = ({ houses }) => {
  return (
    <Layout title='Rent'>
      <h1>Homes to rent</h1>
      {houses?.map(house => (
        <HouseItem key={house.id} house={house} />
      ))}
    </Layout>
  );
};

export default rent;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/houses?type=rent`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
