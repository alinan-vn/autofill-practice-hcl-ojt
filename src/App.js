import './index.css';

import AutofillBox from './components/autofillBox/index';
import {BrowserRouter, Route} from 'react-router-dom';

import React, { useEffect, useState, useRef } from 'react';

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  return (
      <div>
          <input id='auto' placeholder='Type to search' />
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
