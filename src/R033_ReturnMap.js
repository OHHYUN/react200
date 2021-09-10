import React, { Component } from 'react';

class R033_ReturnMap extends Component {
    render() {
        const element_array = [
            <li>react</li>
            , <li>200</li>
            , <li>Array Map</li>
        ]
        return (
            <ul>
                {element_array.map((array_val) => array_val)}
            </ul>
        )
    }

}

export default R033_ReturnMap