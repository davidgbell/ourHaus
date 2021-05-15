import React, { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    router.push(`/search?searchTerm=${searchTerm}`);
    setSearchTerm('');
  };

  const handleInput = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <form role='search' className='search'>
      <label className='visually-hidden' htmlFor='search'>
        Search
      </label>
      <input
        type='search'
        title='Search for homes'
        id='search'
        name='search'
        value={searchTerm || ''}
        placeholder='search'
        required
        onChange={handleInput}
      />
      <button type='submit' onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};
