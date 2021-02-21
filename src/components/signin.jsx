import React,{useState} from "react";

import { FormInput } from "./forminput.jsx";
import { connect } from "react-redux";

import { CustomButton } from "./custombutton.jsx";

import { googleSignInStart,emailSignInStart } from "../redux/user.reducer/user-action";

import './signin.css';

const Sigin = ({startEmailSignIn,startGoogleSignIn})=>{

    const [userCredentials,setCredentials] = useState({email : '',password : ''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        startEmailSignIn({email,password});
    };

    const handleChange = (event) =>{

        const {name,value} = event.target;

        setCredentials({...userCredentials,[name] : value});
    };
        return(
    <div className="sign-in">
        <h2 className="title">I already have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
        
             <FormInput type="email" id="email" name="email" label="Email" onChange={handleChange} value={email}/>
        
             <FormInput type="password" id="password" label="Password" name="password" onChange={handleChange}  value={password}  />
             <div className="button">
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={()=>startGoogleSignIn()} isGoogleSignin>Sign In with Google</CustomButton>
        </div>
        </form>

    </div>

        );

    }



const dispatchToProps = dispatch =>({
    startGoogleSignIn : ()=>(dispatch(googleSignInStart())),
    startEmailSignIn : (emailpass)=>(dispatch(emailSignInStart(emailpass)))
})

export default connect(null,dispatchToProps)(Sigin);