import React from "react";

import Signin from "../components/signin";
import SignUp from "../components/signup";
import './signinout.scss';

export const Siginout = () =>{
  return(
    <div className="sign-in-and-sign-up">
        <Signin/>
        <SignUp />
    </div>
  )
}