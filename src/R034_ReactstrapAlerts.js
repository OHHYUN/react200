import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap'

class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    simple alert [color : light]
                </Alert>
                <UncontrolledAlert color="warning">
                    Uncontrolled Alert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }

}

export default R034_ReactstrapAlerts