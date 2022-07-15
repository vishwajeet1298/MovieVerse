import React from "react";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import "./HomePage.css"
import Navbar from "../../components/Navbar/Navbar"

function HomePage({isUserLoggedIn,setIsUserLoggedIn}){
    return(
        <div>
            <Navbar showSignInButton={false} showInputField={true} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
            <HomePageContent />
        </div>
    );
}
export default HomePage;