import Image from 'next/image';
import Link from 'next/link';

export const HouseItem = ({ house }) => {
  return (
    <div className='house-item'>
      <Image
        src={house.image[0].url}
        alt={house.title}
        width={500}
        height={250}
      />
      <h3>
        <Link href={`houses/${house.slug}`}>{house.title}</Link>
      </h3>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
    </div>
  );
};
