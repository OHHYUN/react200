import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class R040_ReactstrapCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Card dfasdf</CardTitle>
                        <CardSubtitle>dfdafsdf</CardSubtitle>
                        <CardText>fasdfsdfsdafsdf</CardText>
                    </CardBody>
                </Card>
                <Button color="primary">blue</Button>
                <Button color="info">info</Button>
                <Button color="dark">dark</Button>
            </div>
        )
    }

}

export default R040_ReactstrapCard