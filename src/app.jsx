import React, { useState } from 'react';
import Accordion from '../src/Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];
const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color blue',
    value: 'blue'
  },
  {
    label: 'The color green',
    value: 'green'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {/* <Search /> */}
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options} />
      : null
      }
      <Translate />
    </div>
  );
};