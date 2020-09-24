import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log(event.target)
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    };
  }, [])


  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) { //currently selected option is no listed in the list//
      return null; 
    }
    
    return (
      <div
        key={option.value}
        onClick={() => {
       
          onSelectedChange(option)
        }}
        className="item"
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">Select a {label}</label>
        <div
          onClick={() => {
          
            setOpen(!open)//toggles value of open which changes classNames below//
          }} 
          className={`ui selection dropdown ${open? 'visible active' : ''}`}
         >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open? 'visible transition': ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  ) 
}

export default Dropdown