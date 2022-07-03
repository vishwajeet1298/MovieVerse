import React from "react";
import "./Navbar.css";
import navbar from "../../images/navbar/navbarmovie.png";
import {useNavigate} from "react-router-dom";
import Button from "../../global/Button/Button";



function Navbar({showSignInButton}) {

    const navigate=useNavigate()

    function goToSignInPage(){
        navigate("/sign-in")
    }
    return (
        <div className="navbar_container">
            <img className="navbar_logo" src={navbar} alt="logo" />
           {showSignInButton === false ?( 
            " " 
           ):  ( 
           <Button text="SignIn" onClicking={goToSignInPage} />
           )}
        </div>
    );
}
export default Navbar;