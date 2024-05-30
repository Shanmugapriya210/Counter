import React, { Component } from 'react';

export default class Counter extends Component{

        constructor(props){
            super(props);
            this.state = {
                counter: props.startValue
            }
        }
        
    

    incrementValueOnClick = () => {
         this.setState({
            counter: this.state.counter + 1
        });
        // this.state.counter += 1;
        console.log(this.state.counter);
        // counter = this.state.counter + 1;
        // console.log(this.state.counter);
    }

    decrementValueOnClick = () => {
         this.setState({
            counter: this.state.counter - 1
        });
        // this.state.counter -= 1;
        console.log(this.state.counter);
    }


    render(){
        return(
            <div>
                <p>The button was clicked {this.state.counter} times...</p>
                <button onClick={this.incrementValueOnClick}>Incremnent</button>
                <button onClick={this.decrementValueOnClick}>Decrement</button>
                
            </div>
        );
    }
}