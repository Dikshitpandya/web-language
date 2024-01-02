import React from 'react';
import ReactDOM from 'react-dom/client';
class AppLifeCycle extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('constructor method is called....');
        this.state = {
            count:0
        }
    }
    componentWillMount()
    {
        console.log('componentWillMount is called..');
    }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render()
    {
        console.log('render is called.... ', this.state.count);
        return (<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>AppLifeCycle eample</h1>
                    <b>use console ctrl+shift+k</b> <br/>
                    <button onClick={() => this.updateCount()} type='button' className='btn btn-danger'>Click me</button>
                    <h3>Count = {this.state.count}</h3>
                </div>
            </div>
        </div>);
    }
    componentDidMount()
    {
        console.log('componentDidMount is called.... ');
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLifeCycle />)