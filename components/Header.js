import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <div className='header-container'>
      <header>
        <Link href='/'>ourHaus</Link>
        <nav>
          <Link href='/sale'>
            <a>Buy</a>
          </Link>
          <Link href='/rent'>
            <a>Rent</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};
