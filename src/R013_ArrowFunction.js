import React, { Component } from 'react';

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        function Function1(num1) {
            return console.log(num1 + '. Es5 Function');
        }

        Function2 = (num1, num2) => {
            let num3 = num1 + num2;
            console.log(num3 + ' . Arrow Function : ' + this.state.arrowFuc);
        }

    }

    render() {
        return (
            <h2> [THIS IS ARROWFUNCTION] </h2>
        )
    }
}

export default R013_ArrowFunction