import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'French',
    value: 'fr'
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;