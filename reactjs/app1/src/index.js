import React from 'react';
import ReactDOM from 'react-dom/client';
class life extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor method is cllaed....');
    }

    componentWillMount() {
        console.log('componentwillmount is called....');
    }

    render() {
        console.log('render is called....',)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>applife ciycle example</h1>
                        <b>use console to see output</b>
                        <hr />

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount is called.....', 'this use to called api###')
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<life />)