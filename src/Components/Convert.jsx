import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
  const [translate, setTranslated] = useState('');
   

  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: text,
        target: language.value,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    })
  }, [language, text]);
  
  
  
  return <div></div>;
};

export default Convert