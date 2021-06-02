import React from 'react';
import {autofillData} from '../autofillData/index';

class AutofillBox extends React.Component {

    

    render(){
        return(
            <div className='autofill'>
                <h3 className='autofill__title'>Please type in a website you want to visit. Start with 'https://' to begin the search....</h3>
                <input onChange={this.filterResults} className='autofill__input' placeholder='ex. https://google.com' />
            </div>
        )
    }
}

export default AutofillBox;