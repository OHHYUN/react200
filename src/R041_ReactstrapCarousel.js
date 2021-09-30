import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap'
const items = [
    {
        src: 'http://bitly.kr/QUnjzAodA',
        altText: ' 슬라이드1 이미지 대체 문구',
        caption: ' 설명 ',
        header: '슬라이드 제목'
    }
]
class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }

}

export default R041_ReactstrapCarousel