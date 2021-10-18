import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Search from './Search';
const Search = () => {
  const [term, setTerm] = useState("hi");
  const [debouncedTerm, setdebouncedTerm] = useState(term);
  const [results, setResults] =useState([]);

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setdebouncedTerm(term);
    },1000);
    return()=> {
      clearTimeout(timerId);
    }
  },[term]);

  useEffect(()=>{
 const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };  
if (debouncedTerm) {
      search();
    }
  },[debouncedTerm])


const renderResults = results.map((results)=> {
  return (
    <div key={results.pageid} className="item">
      <div className="right floated content">
        <a href={`https://en.wikipedia.org?curid=${results.pageid}`} className="ui button">go</a>

      </div>
        <div className="content">
          <div className="header">{results.title}</div>
          <span dangerouslySetInnerHTML ={{ __html: results.snippet}}></span>
          {/* {results.snippet} */}
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
            value={term}
            onChange={(e) =>setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui clled list">
      {renderResults}
      </div>
    </div>
  );
};

export default Search;
