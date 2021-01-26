import React from "react";

import { FormInput } from "./forminput.jsx";

import { CustomButton } from "./custombutton.jsx";

import {GoogleSignIn,auth} from "../firebase/firebase.config.js"

import './signin.css';

class Sigin extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      };

    handleChange = (event) =>{

        const {name,value} = event.target;

        this.setState({[name] : value});
    };

    render(){
        return(
    <div className="sign-in">
        <h2 className="title">I already have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        
             <FormInput type="email" id="email" name="email" label="Email" onChange={this.handleChange} value={this.state.email}/>
        
             <FormInput type="password" id="password" label="Password" name="password" onChange={this.handleChange}  value={this.state.password}  />
             <div className="button">
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={GoogleSignIn} isGoogleSignin>Sign In with Google</CustomButton>
        </div>
        </form>

    </div>

        );

    }

}

export default Sigin;