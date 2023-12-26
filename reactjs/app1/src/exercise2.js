import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (
    //    3) create change password form that accept current password, new password and confirm new passwoord 

    <div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h1>change password</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                           
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='password'> current password</label>
                                <input id='password' type='password' className='form-control' placeholder='Password' required />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='password'>confirm password</label>
                                <input id='password' type='password' className='form-control' placeholder=' confirm Password' required />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='password'>confirm new password</label>
                                <input id='password' type='password' className='form-control' placeholder=' confirm new Password' required />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type='button' className='btn btn-danger'>Save</button>
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