import Image from 'next/image';
import React from 'react';
import { Layout } from '../../components/Layout';
import { API_URL } from '../../config';
import { formatDate } from '../../utils/formatDate';

const house = ({ house }) => {
  return (
    <Layout title={house.tile} description={house.description}>
      <Image
        src={house.image[0].url}
        alt={house.title}
        width={400}
        height={300}
      />
      <h1>{house.title}</h1>
      <p className='home-description'>{house.description}</p>
      <div className='home-details'>
        <p>Date available: {formatDate(house.dateAvailable)}</p>
        <p>
          Price: £ {house.price}
          {house.type === 'rent' ? (
            <span title='monthly payments'> monthly</span>
          ) : null}
        </p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p>
      </div>
      <div className='contact'>
        <h3>Interested</h3>
        <a href='#'>Email us</a>
      </div>
    </Layout>
  );
};

export default house;

export const getServerSideProps = async ({ query: { slug } }) => {
  const res = await fetch(`${API_URL}/houses?slug=${slug}`);
  const house = await res.json();

  return {
    props: {
      house: house[0],
    },
  };
};
