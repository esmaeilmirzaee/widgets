import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState(text);
  const [debouncedText, setDebouncedText] = useState(translatedText);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [language, debouncedText]);

  return (
    <>
      <div className='ui message'>
        <div className='header'>Output {language.value}</div>
        <p>{translatedText}</p>
      </div>
    </>
  );
};

export default Convert;
