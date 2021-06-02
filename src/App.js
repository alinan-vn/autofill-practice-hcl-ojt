import './index.css';

import AutofillBox from './components/autofillBox/index';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Route exact path="/" component={AutofillBox} />
      </BrowserRouter>
    </div>
  );
}

export default App;
