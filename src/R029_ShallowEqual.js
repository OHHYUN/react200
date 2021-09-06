import { PureComponent } from 'react';
import { shallowEqualArrays } from "shallow-equal";

class R029_ShallowEqual extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualArrays(this.state, nextState);
    }

    componentDidMount() {
        const object = { react: '200' };
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', { react: '200' }];

        console.log(shallowEqualArrays(Array1, Array2));
        console.log(shallowEqualArrays(Array2, Array3));
        this.setState({ StateString: ' react' });

    }

    render() {
        console.log('render() 실행');
        return (
            <div>
                <button onClick={(e) => this.buttonClick('String')}>문자열 직접변경</button>
                <button onClick={(e) => this.buttonClick('dfafs')}>객체 직접변경</button>
            </div>
        )
    }
}

export default R029_ShallowEqual