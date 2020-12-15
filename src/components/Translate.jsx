import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// eAIszaSmyCHUaCmpR7ecT_yDFiHC98CZJly2LTms-IwDlM

const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'France',
    value: 'fr',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('245, 247, 254');

  return (
    <>
      <div className='ui form'>
        <div className='field'>
          <label>Text</label>
          <textarea
            rows='2'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className=''>
        <Dropdown
          options={languages}
          selected={language}
          onSetSelected={setLanguage}
        />
        <div className='ui horizontal divider'></div>
        <Convert text={text} language={language} />
      </div>
    </>
  );
};

export default Translate;
