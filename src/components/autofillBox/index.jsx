import React from 'react';
import {autofillData} from '../autofillData/index';

class AutofillBox extends React.Component {

    constructor(){
        super()
        this.state ={
            autofillData: autofillData,
            inputData: ""
        }
    }

    filterResults = () => {
        console.log(this.state.autofillData)
    }

    updateInputData = () => {
        const inputBox = document.querySelector("input.autofill__input");
        let inputBoxValue = inputBox.value;

        this.setState({
            ...this.state,
            inputData: inputBoxValue
        })

        this.filterResults()
    }

    render(){
        return(
            <div className='autofill'>
                <h3 className='autofill__title'>Please type in a website you want to visit. Start with 'https://' to begin the search....</h3>
                <input onChange={this.updateInputData} className='autofill__input' placeholder='ex. https://google.com' />
            </div>
        )
    }
}

export default AutofillBox;