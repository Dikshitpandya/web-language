// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// var output = <div><h1>hello world</h1></div>;
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();



// 5) create page to search for bus route. accept source, destination and allow user to select bus type using radio button. provide express, slepper, ac, ac slepper bus as bus type 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (

    <div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h1>Serch bus</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='to'>To.</label>
                                <input type='text,form-check-input' className='form-control' placeholder='to' id='to' required />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='from'>From.</label>
                                <input id='from,form-check-input' type='text' className='form-control' placeholder='destination' required />
                            </div>
      
                            <div className='d-flex justify-content-end'>
                                <button type='button' className='btn btn-danger'>Find now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
root.render(page);