import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  
  console.log(results);
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
    
    const timeoutId = setTimeout(() => {
       if (term) { //if term is empty, no default search until user types//
      search();
      }
    }, 300);
    
    return () => {clearTimeout(timeoutId)}
  }, [term]);
  
  const renderedResults = results.map((results) => {
    return (
      <div key={results.pageid} className="item">
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${results.pageid}`} className="ui button">go</a>
        </div>
        <div className="content">
          <div className="header">{results.title}</div>
          <span dangerouslySetInnerHTML={{__html: results.snippet}}></span>
        </div>
      </div>
    )
  })

  return (
  <div>
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
        className='input'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder='Search...'
        autoFocus='true' />
      </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
  </div>
  )
};

export default Search;