import Image from 'next/image';

export const HouseItem = ({ house }) => {
  return (
    <div>
      <h3>{house.title}</h3>
      <Image
        src={house.image[0].url}
        alt={house.title}
        width={300}
        height={200}
      />
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
    </div>
  );
};