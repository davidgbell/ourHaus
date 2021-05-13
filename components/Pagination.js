import Link from 'next/link';
import React from 'react';
import { PER_PAGE } from '../config';

export const Pagination = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {page > 1 && <Link href={`/houses/?page=${page - 1}`}>Prev</Link>}
      {page < lastPage && <Link href={`/houses?page=${page + 1}`}>Next</Link>}
    </>
  );
};
