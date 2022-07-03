import React from "react";
import "./Navbar.css";
import navbar from "../../images/navbar/navbarmovie.png";
import {useNavigate} from "react-router-dom";


function Navbar({showSignInButton}) {

    const navigate=useNavigate()
    function goToSignInPage(){
        navigate("/sign-in")
    }
    return (
        <div className="navbar_container">
            <img src={navbar} alt="logo" />
           {showSignInButton === false ? "" 
           :<button className="navbar_button" onClick={goToSignInPage}>SignIn</button>}
        </div>
    );


}
export default Navbar;