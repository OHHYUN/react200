import React, { Component } from 'react';

class R014_ForEach extends Component {


    componentDidMount() {
        var For_Arr = [3, 2, 8, 8];
        var For_newArr = [];

        for (var i = 0; i < For_Arr.length; i++) {
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : [" + For_newArr + "]");

    }

    render() {
        return (
            <h2> [THIS IS ForEach] </h2>
        )
    }
}

export default R014_ForEach