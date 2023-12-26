import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (
    <div className='container'>
        {/* example of bootstrap */}
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h1>Login</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='email'>Email address</label>
                                <input type='email' className='form-control' placeholder='Email Address' id='email' required />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='password'>Your password</label>
                                <input id='password' type='password' className='form-control' placeholder='Password' required />
                            </div>
                            <div className='d-flex justify-content-end'>
                            <button type='button' className='btn btn-danger'>Login</button>
                            &nbsp;
                            <button type='reset' className='btn btn-warning'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
root.render(page);