import React from 'react';
import {autofillData} from '../autofillData/index';

class AutofillBox extends React.Component {

    constructor(){
        super()
        this.state ={
            autofillData: autofillData,
            filteredData: [],
            inputData: "",
            search: false
        }
    }

    filterResults = () => {
        this.setState({
            ...this.state,
            filteredData: []
        })

        let possibleResults = [];
        let searchInputArr = this.state.inputData.split('');
        let searchCharLength = searchInputArr.length;
    
        autofillData.forEach((data) => {
            let dataCharArr = data.split('');
            let matchCondition = false;
            for(let i = 0; i < searchCharLength; i++){
                if(dataCharArr[i] === searchInputArr[i]){
                    matchCondition = true;
                } else{
                    matchCondition = false
                }
            }
            if(matchCondition){
                possibleResults.push(data)
            }
        })

        console.log("are there possible results", possibleResults)

        if(possibleResults.length > 0){
            let newResults = possibleResults.map((value, ind) => {
                return(
                    <p key={ind}>{value}</p>
                )
            })
            this.setState({
                ...this.state,
                filteredData: newResults
            })
        }

        console.log("final results in state" ,this.state.filteredData)
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

    changeSearch = () => {
        this.setState({
            ...this.state,
            search: !this.state.search
        })
    }

    componentDidMount(){
        // let firstFilteredData = autofillData.map((value, ind) => {
        //     return(
        //         <p key={ind}>{value}</p>
        //     )
        // })
        // this.setState({
        //     ...this.state,
        //     filteredData: firstFilteredData
        // })
    }

    render(){
        return(
            <div className='autofill'>
                <h3 className='autofill__title'>Please type in a website you want to visit. Start with 'https://' to begin the search....</h3>
                {/* <input onClick={this.changeSearch} onChange={this.updateInputData} className='autofill__input' placeholder='ex. https://google.com' />
                {this.state.search ? this.state.filteredData : null} */}
            </div>
        )
    }
}

export default AutofillBox;