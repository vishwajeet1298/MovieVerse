import React, { useState } from "react";
import "./SignInBody.css";
//import { useNavigate } from "react-router-dom";
import { SIGN_IN_BODY_TEXT } from "../constants/components.js";
import Button from "../../global/Button/Button";

function SignInBody() {

    //const navigate = useNavigate()
    const [showSignInBox, setShowSignInBox] = useState(true);

    function setShowSignInBoxAs(param) {
        setShowSignInBox(param);
    }


    //  To demonstrate use of useState in Signup page.  

    //console.log("showsignInBox",showSignInBox)
    return (
        <>
            {showSignInBox ? (

                <div className="signinbody_container">
                    <div className="signinbody_form">
                        <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN_TITLE}</p>
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="text" />
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                        <Button text={SIGN_IN_BODY_TEXT.LOGIN_TEXT} />

                        <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                        <p className="signinbody_text">
                            {SIGN_IN_BODY_TEXT.NEW_TO_THIS_APP}{" "}
                            <span onClick={() => setShowSignInBoxAs(false)} >
                                {SIGN_IN_BODY_TEXT.SIGN_UP_NOW}
                            </span>
                        </p>

                    </div>
                </div>
            ) : (

                <div className="signinbody_container">
                    <div className="signinbody_form">
                        <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_UP_TITLE}</p>
                        <input placeholder="First Name" type="text" />
                        <input placeholder="Last Name" type="text" />
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="email" />
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                        {/* <input placeholder="Password" type="password" /> */}
                        <Button text={SIGN_IN_BODY_TEXT.SIGN_UP_TEXT} />
                        <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />

                        <p className="signinbody_text">
                         {SIGN_IN_BODY_TEXT.ALREADY_REGISTERED}{" "} 
                        <span onClick={() => setShowSignInBoxAs(true)}>
                            {SIGN_IN_BODY_TEXT.LOGIN_TEXT}</span> </p>

                    </div>
                </div>
            )}
        </>
    )

}
export default SignInBody;