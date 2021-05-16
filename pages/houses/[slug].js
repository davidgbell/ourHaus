import Image from 'next/image';
import React from 'react';
import { HouseLocation } from '../../components/HouseLocation';
import { Layout } from '../../components/Layout';
import { API_URL } from '../../config';
import { formatDate } from '../../utils/formatDate';

const house = ({ house }) => {
  return (
    <Layout title={house.title} description={house.description}>
      <div className='individual-house'>
        <h1 className='titleBravo'>{house.title}</h1>
        <div className='house'>
          <Image
            src={house.image[0].url}
            alt={house.title}
            width={400}
            height={325}
            objectFit='cover'
          />

          <div className='description'>
            <p>{house.description}</p>
          </div>
        </div>
        <div className='house-info'>
          <p>
            Date available: <strong>{formatDate(house.dateAvailable)}</strong>
          </p>
          <p>
            Price:<strong> £{house.price}</strong>
            {house.type === 'rent' ? (
              <span title='monthly payments'> monthly</span>
            ) : null}
          </p>
          <p>
            Bedrooms: <strong>{house.bedrooms}</strong>
          </p>
          <p>
            Bathrooms: <strong>{house.bathrooms}</strong>
          </p>
        </div>
        <HouseLocation house={house} />
      </div>
    </Layout>
  );
};

export default house;

export const getServerSideProps = async ({ query: { slug } }) => {
  // get the res of a house matching the slug passed through using next Link / Routing
  const res = await fetch(`${API_URL}/houses?slug=${slug}`);
  const house = await res.json();

  return {
    props: {
      house: house[0],
    },
  };
};
