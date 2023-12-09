import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            secondName : '',
            display : '',
        }
    }

    handlefirstName = (event) => {
        this.setState({firstName : event.target.value});
    }

    handlesecondName = (event) => {
        this.setState({secondName : event.target.value});
    }

    handleRelationshipClick = () => {
        let s1 = this.state.firstName.toLowerCase().trim();
        let s2 = this.state.secondName.toLowerCase().trim();
        let s3 = s1.length + s2.length;
        let obj = {};
        let count = 0;

        if(s1.length == 0 || s2.length == 0){
            s3 = undefined;
        }

        else{
            
            for(let i=0;i<s1.length;i++){
                if(obj[s1[i]] == undefined){
                    obj[s1[i]] = 1;
                }
                else{
                    obj[s1[i]] ++;
                }
            }


            for(let i=0;i<s2.length;i++){
                if(obj[s2[i]]>0){
                    obj[s2[i]] --;
                    count++;
                }
            }

        }


        s3 = (s3 - (2 * count)) % 6;
        switch (s3) {
            case 1: this.setState({display : 'Friends'})
            break;
            case 2: this.setState({display : 'Love'})
            break;
            case 3: this.setState({display : 'Affection'})
            break;
            case 4: this.setState({display : 'Marriage'})
            break;
            case 5: this.setState({display : 'Enemy'})
            break;
            case 0: this.setState({display : 'Siblings'})
            break;
        
            default: this.setState({display:'Please Enter valid input'})
            break;
        }

    }

    handleClearClick = () => {
        this.setState({firstName : '', secondName : '', display : ''});
    }

    render() {

        return(
            <div>
                {/* Do not remove the main div */}
               
               
                <input type="text" value={this.state.firstName} onChange={this.handlefirstName} data-testid="input1" name="name1"/>
                <input type="text" value={this.state.secondName} onChange={this.handlesecondName} data-testid="input2" name="name2"/>
                <button onClick={this.handleRelationshipClick} data-testid="calculate_relationship">Calculate Relationship Future</button>
                <button onClick={this.handleClearClick} data-testid="clear">Clear</button>
                <h3 data-testid="answer">{this.state.display}</h3>
            </div>
               
            
        )
    }
}


export default App;
