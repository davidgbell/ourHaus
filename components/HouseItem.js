import Image from 'next/image';
import Link from 'next/link';

export const HouseItem = ({ house }) => {
  return (
    <div className='house-item'>
      <Image
        src={house.image[0].url}
        alt={house.title}
        width={600}
        height={350}
        objectFit='cover'
      />
      <div className='house-item-text'>
        <h3>
          <Link href={`houses/${house.slug}`}>{house.title}</Link>
        </h3>
        <p>
          <strong> {house.bedrooms}</strong> Bed{' '}
          <strong>{house.bathrooms}</strong> Bath
        </p>
        <p></p>
      </div>
    </div>
  );
};
