import React from "react";
import "./registerMain.css";
const RegisterMain = () => {
     return (
          <div className="Register-main">
               <div className="Register-container">
                    <h1 className=" main-heading"> Create Account 👋</h1>

                    <div className="Register-container my-3">
                         <input
                              type='text'
                              placeholder="Full Name" required
                              className="form-control" />
                    </div>

                    <div className="Register-container my-3">
                         <input
                              type='Number'
                              placeholder="Mobile Number" required
                              className="form-control" />
                    </div>

                    <div className="Register-container my-3">
                         <input
                              type='email'
                              placeholder="Email  Address" required
                              className="form-control" />
                    </div>
                    <div className="Register-container my-3">
                         <input
                              type='date'
                              placeholder="Date of birth (DD/MM/YYYY)" required
                              className="form-control" />
                    </div>
                    <div className="Register-containermy-3">
                         <input
                              type='password'
                              placeholder="password " required
                              className="form-control" />
                    </div>
                    <div className="Register-container my-3">
                         <input
                              type='password'
                              placeholder=" Confirm password " required
                              className="form-control" />
                    </div>
                    <div className="form-container my-4">
                         <button className="btn-main-btn "> Create Account</button>
                    </div>
                    <h3 className="heading-sub my-2">
                         Already  have an Account?  <a href="/login" className="text-pink  size-medium mx-2"> Login here</a>
                    </h3>
               </div>
          </div>
     )
};

export default RegisterMain;
