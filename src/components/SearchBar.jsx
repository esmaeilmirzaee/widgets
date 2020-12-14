import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('ReactJS');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const termSubmitted = (e) => {
    e.preventDefault();
    console.log('submitted', term);
  };

  //  https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=computer
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // To avoid initial delay of page load
    if (term && !results.length) {
      search();
    } else {
      /* 
      stop the searching for 1 second, unless user presses another key
      and cancelling the previous attempt to the axios get by clearTimeout
      */
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='header'>{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        <div className='right floated content'>
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            <i className='ui icon arrow alternate right circle large link blue'></i>
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <form className='ui form' onSubmit={(e) => termSubmitted(e)}>
        <div className='field'>
          <div className='ui input icon'>
            <input
              className=''
              type='text'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <i
              className='search icon link'
              onClick={() => console.log('clicked')}
            ></i>
          </div>
        </div>
      </form>
      <div className='ui list'>{renderedResults}</div>
    </>
  );
};

export default SearchBar;
