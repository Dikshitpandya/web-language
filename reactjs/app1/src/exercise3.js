import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (

    // 4) create forgot password page.

    <div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h1>forgot password</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='email'>Email address</label>
                                <input type='email' className='form-control' placeholder='Email Address' id='email' required />
                            </div>
                          
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='mobile'>mobile no.</label>
                                <input id='password' type='no' className='form-control' placeholder='mobile no' required />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type='button' className='btn btn-danger'> next </button>
                                &nbsp;
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
root.render(page);