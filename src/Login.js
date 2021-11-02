import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from "./firebase";
import userEvent from '@testing-library/user-event';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   //some fancy firebase LOGIN sheeeeeettttt...
   const signIn = e => {
       e.preventDefault();

      auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

   }

   //do some fancy firebase REGISTER sheeeeeettttt...
    const register = e => {
       e.preventDefault();

       auth 
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                   if (auth){
           history.push('/')
       }
            })
            .catch(error => alert(error.message))
   }

    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                
                {/* E-MAIL INPUT */}
                    <h5>E-mail</h5>
                    <input 
                    type="text"
                    vale= {email}
                    onChange={e => setEmail(e.target.value)}
                    />

                {/* PASSWORD INPUT */}
                     <h5>Password</h5>
                    <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                {/*********** SIGN IN BUTTON ***********/}
                    <button 
                    type="submit"
                    onClick = {signIn} className="login__signInButton">Sign in</button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                
                {/*********** REGISTER IN BUTTON ***********/}
                <button
                className="login__registerButton"
                onClick={register}
                >
                Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
