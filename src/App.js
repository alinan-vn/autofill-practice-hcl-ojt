import './index.css';

import React, { useEffect, useState } from 'react';
import {autofillData} from './components/autofillData/index';

const Auto = () => {
  const [display, setDisplay] = useState(false); // useState hook to show suggestions or now
  const [options, setOptions] = useState([]); // useState hook to contain the data which we are filtering from
  const [search, setSearch] = useState(""); // useState hook that contains user input

  // sets setOptions data once, prevents from multiple re-renders
  useEffect(() => {
    const data = autofillData; 

    setOptions(data)
  }, [])

  // sets display and userinput into their respective useState hooks
  const setResult = result => {
    setSearch(result);
    setDisplay(false);
  }

  return (
      <div>
          <input 
            id='auto' 
            className='autofill__input'
            onClick={() => setDisplay(!display)} 
            placeholder='Type to search' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
          {display && (
            <div>
              {options
                .filter(({name}) => name.indexOf(search.toLowerCase()) > -1 )
                .map((value, ind) => {
                  return(
                    <div 
                      className='autofill__suggestion'
                      onClick={() => setResult(value.name)} 
                      key={ind}
                    >
                      <p className='autofill__suggestion-text'>{value.name}</p>
                    </div>
                  )
                })
              }
            </div>
          )}
      </div>
  )
}

function App() {
  return (
    <div>
      <div className='autofill'>
          <h1>Custom Autocomplete React</h1>
          <div>
              <Auto />
          </div>
      </div>
    </div>
  );
}

export default App;
