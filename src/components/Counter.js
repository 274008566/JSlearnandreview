import React, { Component } from 'react';
import store from '../store';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            num: store.getState().counter
        }
        store.subscribe(() => {
            this.setState({
                num: store.getState().counter
            })
        })
    }
    handleAdd = () => {
        //console.log(19,store.getState())
        let action = { type: 'ADD' }
        store.dispatch(action);
        //22

    }
    handleDec = () => {
        let action = { type: 'DEC' }
        store.dispatch(action);
    }
    handleOdd = () => {
        if (store.getState().counter % 2 !== 0) {
            let action = { type: 'ADD' };
            store.dispatch(action);
        }
    }
    handleEven = () => {
        if (store.getState().counter % 2 === 0) {
            let action = { type: 'ADD' };
            store.dispatch(action);
        }
    }
    render() {
        return (
            <div>
                <p>
                    点击:<span>{this.state.num}</span>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <button onClick={this.handleOdd}>奇数+1</button>
                    <button onClick={this.handleEven}>偶数+1</button>
                </p>
            </div>
        );
    }
}

export default Counter;
