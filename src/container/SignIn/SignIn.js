import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SignInBody from "../../components/SignInBody/SignInBody";


import "./SignIn.css";


function SignIn(){
    
    return(
        <div>
            <Navbar showSignInButton={false}  />
            <SignInBody />
            
        </div>
    );
}
export default SignIn;