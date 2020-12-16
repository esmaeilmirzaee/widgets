import React, { useState, useEffect } from 'react';
import Link from './Link';

const Header = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <>
      <div className='ui tabular menu'>
        <Link className='item' onClick={() => setPath('/')}>
          Accordion
        </Link>
        <Link
          className='item'
          href='/dropdown'
          onClick={() => setPath('/dropdown')}
        >
          Dropdown
        </Link>
        <Link
          className='item'
          href='/translate'
          onClick={() => setPath('/translate')}
        >
          Translate
        </Link>
        <Link
          className='item'
          href='/search'
          onClick={() => setPath('/search')}
        >
          Search
        </Link>
      </div>
    </>
  );
};

export default Header;
