// SearchHistory.js
import React from 'react';
import "./App.css"


const SearchHistory = () => {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  

  return (
    <div className='hist'>
      <h1>Search History of weather</h1>

     
       <ul class="list-group">
        {history.map(item => (
            <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
