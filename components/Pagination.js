import Link from 'next/link';
import React from 'react';
import { PER_PAGE } from '../config';

export const Pagination = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className='pagination'>
      {page > 1 && (
        <Link href={`/houses/?page=${page - 1}`}>
          <a className='btn'>Prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/houses?page=${page + 1}`}>
          <a className='btn'>Next</a>
        </Link>
      )}
    </div>
  );
};
