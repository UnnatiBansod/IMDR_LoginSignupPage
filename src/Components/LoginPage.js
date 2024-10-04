// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import SignUpPage from './SignUpPage'; // Import the SignUpPage component
// import Sidebar from './Sidebar'; // Import the Sidebar component

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up forms

  // If the user chooses to sign up, render the SignUpPage
  if (isSignUp) {
    return <SignUpPage />;
  }

  // Render the Login Page if the user has not chosen to sign up
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login to your account</h2>
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" placeholder="Enter User Name" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit">SIGN IN</button>
        
        {/* First-time user section with link to Sign Up */}
        <div className="first-time-user">
          { <p>If you are visiting for the first time, <span onClick={() => setIsSignUp(true)}>Click Here</span></p>
           }
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
