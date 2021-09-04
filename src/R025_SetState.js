import React, { Component } from 'react';

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react'
        }
    }

    StateChange = (flag) => {
        if (flag == 'direct') {
            console.log("react");
            this.state.StateString = '리액트';
        }
        if (flag == 'setstate') this.setState({ StateString: 'REACT' });
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.StateChange('direct', e)}>state 직접변경</button>
                <button onClick={(e) => this.StateChange('setstate', e)}>setstate 변경</button>
                [state change] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState