import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;