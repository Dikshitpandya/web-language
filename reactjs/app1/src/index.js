import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import changepassword from './Changpassword'
const root = ReactDOM.createRoot(document.getElementById('root'));
function Page() {
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>useState Hook</h1>
            </div>
        </div>
        <div className='row mt-3'>
            <changepassword />
        </div>
    </div>)
}
root.render(<Page />)