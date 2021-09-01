import React, { Component } from 'react';

class R022_PropsDefault extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

R022_PropsDefault.defaultProps = {
    ReactString: "React",
    ReactNumber: 400
}
export default R022_PropsDefault