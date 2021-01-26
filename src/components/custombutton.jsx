import React from "react";

import './custombutton.scss';

export const CustomButton = ({children,isGoogleSignin,inverted,...otherProps})=>{

    return(
        <button className={`${inverted?"inverted":""} ${isGoogleSignin?"google-button":""} custom-button`} {...otherProps}>
            {children}
            </button>
    )
}