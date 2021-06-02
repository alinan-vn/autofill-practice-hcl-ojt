import './index.css';

import AutofillBox from './components/autofillBox/index';
import {BrowserRouter, Route} from 'react-router-dom';

import React, { useEffect, useState, useRef } from 'react';
import {autofillData} from './components/autofillData/index';

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = autofillData;

    setOptions(data)
  }, [])

  const setResult = result => {
    setSearch(result);
    setDisplay(false);
  }

  return (
      <div>
          <input 
            id='auto' 
            onClick={() => setDisplay(!display)} 
            placeholder='Type to search' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {display && (
            <div>
              {options.filter(({name}) => name.indexOf(search.toLowerCase()) > -1 ).map((value, ind) => {
                return(
                  <div 
                    onClick={() => setResult(value.name)} 
                    key={ind}
                  >
                    {value.name}
                  </div>
                )
              })}
            </div>
          )}
      </div>
  )
}

function App() {
  return (
    <div>
      <div>
          <h1>Custom Autocomplete React</h1>
          <div>
              <Auto />
          </div>
      </div>


      <br /><br /><hr />
      <p>IGNORE BELOW THIS LINE</p>
      <hr />
      <BrowserRouter>
          <Route exact path="/" component={AutofillBox} />
      </BrowserRouter>
    </div>
  );
}

export default App;
