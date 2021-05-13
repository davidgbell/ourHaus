import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <div className='header'>
      <header>
        <Link className='logo' href='/'>
          <a className='logo' aria-label='home'>
            ourHaus
          </a>
        </Link>
        <nav>
          <Link href='/sale'>
            <a>Buy</a>
          </Link>
          <Link href='/rent'>
            <a>Rent</a>
          </Link>
          <Link href='/houses'>
            <a>All properties</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};
