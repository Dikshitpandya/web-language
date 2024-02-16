import { useState } from "react";
function Login()
{
    // create state variable using useState hook 
    let [email,setEmail] = useState(''); //create one state vaariable email
    let [password,setPassword] = useState('') //create one state vaariable password
    let [message,setMessage] = useState('');
    
    let verifyLogin = function(e)
    {
        e.preventDefault(); //required
        console.log(email,password);
        if(email == 'admin@gmail.com' && password == '123123')
        {
            setMessage('login successfull');
        }
        else 
        {
            setMessage('login not successfull');
        }
    }

    return (<div className="container mt-5">
    <div className="row">
      <div className="col-6 offset-3 ">
        <div className="card shadow">
          <div className="card-header text-bg-primary">
            <h5 className="card-title">Login Form</h5>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => verifyLogin(e)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required value={password} 
                onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <p className="text-center fw-bold fs-3">{message} </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Login