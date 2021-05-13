import Image from 'next/image';
import Link from 'next/link';

export const HouseItem = ({ house }) => {
  return (
    <div className='house-item'>
      <h3>{house.title}</h3>
      <Image
        src={house.image[0].url}
        alt={house.title}
        width={300}
        height={200}
      />
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <Link href={`houses/${house.slug}`}>
        <a>View</a>
      </Link>
    </div>
  );
};
