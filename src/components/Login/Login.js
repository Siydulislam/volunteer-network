import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../logos/google.png';
import './Login.css';
import brand from '../../logos/brand.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="jumbotron text-center">
            <img src={brand} alt=""/>
            <div className="box-details">
                <h1>Login With</h1>
                <button className="google-details mt-3" onClick={handleGoogleSignIn}>
                    <div className="row google-btn">
                        <div className="col-2 mt-2">
                            <img src={google} alt="" style={{width:"20px"}}/>
                        </div>
                        <div className="col-10 mt-2">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
                <p className="mt-2">Don't have an account?<span><a href="/">create an account.</a></span></p>
            </div>
        </div>
    );
};

export default Login;