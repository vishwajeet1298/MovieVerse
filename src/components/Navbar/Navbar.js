import React from "react";
import "./Navbar.css";
import navbar from "../../images/navbar/navbarmovie.png";
import {useNavigate} from "react-router-dom";
import Button from "../../global/Button/Button";
import { auth } from "../../firebase";



function Navbar({showSignInButton,showInputField,isUserLoggedIn,setIsUserLoggedIn}) {
 console.log(isUserLoggedIn)
    const navigate=useNavigate();

    function goToSignInPage(){
        navigate("/sign-in")
    }

    function logoutTheUser(){
        auth.signOut()
        setIsUserLoggedIn(false)
        
    }
   
    return (
        <div className="navbar_container">
            <img className="navbar_logo" src={navbar} alt="logo" />
           {showSignInButton === false ?( 
            " " 
           ):  ( 
           <Button text="SignIn" onClicking={goToSignInPage} />
           )}
           {showInputField || isUserLoggedIn ?(
            <div>
               {showInputField ? <input className="navbar_input_field" /> : ""}
          {isUserLoggedIn ? <Button text="Logout" onClicking={logoutTheUser} /> : ""}
            </div>
           ) : ( 
            ""
           )}


           
{/* // To Show Search Bar When User is Logged In
           {showInputField ? <input /> : " "}
            */}
           {/* {showInputField && <input />} */}





        </div>
    );
}
export default Navbar;