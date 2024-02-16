//create function components for change password using bootstrap 5. it should have 3 input. current password, new password and confirm new password if current password is 123123 and new and confirm new password is same. then display message password changed successfully else display message invalid password change attempt 

import { useState } from "react";
function  changepassword()
{
    let [currentpassword,setcurrentpassword] = useState('')
    let [newpassword,setnewpassword] = useState('')
    let [confirmpasswoed,setconfirmpasswoed] = usestate('')

    let verifyLogin = function(e)
    {
        e.preventDefault(); //required
        console.log(email,password);
        if(currentpassword == '123123' && newpassword == confirmpasswoed)
        {
            setMessage('login successfull');
        }
        else 
        {
            setMessage('login not successfull');
        }
    }

    return(
           <div className="conteiner">
            <div className="row">
                <div className="col-6 offset-3">
                   <div className="card shadow">
                    <div className="card-header">
                        <h5 className="card-title">changepassword</h5>
                    </div>
                    <div className="card-body">
                        <from onSubmit={(e) => verifyPassword(e)}>
                            <div classname="md-3">
                                <lable htmlfor="currentpassword" className="form-lable">Current Password :-</lable>
                                <input type="password" className="form-control" id="currentpassword" placeholder="Enter Current password" required value={password} onChange={(e) => setcurrentpassword(e.target.value)}/>
                            </div>
                            <div className="md-3">
                                <lable htmlfor="newpassword" className="form-lable" >new Password :- </lable>
                                <input type="password" className="form-lable" id="newpassword" placeholder="Enter New Password" required value={password} onchange={(e) => setnewpassword(e.target.value)}/>
                            </div>
                            <div classnmae="md-3">
                                <lable htmlfor="confirmpasswoed" className="form-lable">Confirm New Password :-</lable>
                                <input type="password" classname="form-lable" id="confirmpassword" placeholder="Enter CONfirm New Password" required value={password} onchange={(e) => setconfirmpasswoed(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn-btn-danger">changepassword</button>
                        </from>
                    </div>
                   </div>
                </div>
            </div>
           </div>
    );

    
}
export default changepassword

