import React from "react";
import "./login-main.css";
const LoginMain = () => {
     return (
          <div className="login-main">
               <div className="login-container">
                    <h1 className=" main-heading"> Login to Container 👋</h1>

                    <div className="form-container my-4">
                         <input
                              type='email'
                              placeholder="Email  Address" required
                              className="form-control" />
                    </div>
                    <div className="form-container my-4">
                         <input
                              type='password'
                              placeholder="password " required 
                              className="form-control"/>
                    </div>
                    <div className="text-right my-4">
            <a href='#/' className="text-pink link-small "> Forget Password?
                         </a>
                    </div>
                    <div className="form-container my-6">
                         <button className="btn-main-btn p-2"> Sign In</button>
                    </div>
                    <h3 className="heading-sub my-4">
                     Don't have an Account? <a href="/register" className="text-pink  size-medium mx-2"> Create Account</a>
                    </h3>
               </div>
          </div>
     )
};

export default LoginMain;
