import React from 'react';
import { HouseItem } from '../components/HouseItem';
import { API_URL } from '../config';

const houses = ({ houses }) => {
  return (
    <div>
      {houses.map(house => (
        <HouseItem key={house.id} house={house} />
      ))}
    </div>
  );
};
export default houses;

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/houses`);
  const houses = await res.json();

  return {
    props: {
      houses,
    },
  };
};
