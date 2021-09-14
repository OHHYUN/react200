import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom">
                    <span>bottom</span>
                </div>
            </div>

        )
    }

}

export default R036_ReactstrapBreadcrumbs