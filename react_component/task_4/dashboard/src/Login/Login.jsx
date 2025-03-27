import React from "react"; // Import React if not already present
import "./Login.css";
import WithLogging from "../HOC/WithLogging"; // Import the HOC

function Login() {
    return (
        <div className="App-login">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="text" name="user_password" id="password" />
            <button role="button" type="submit">OK</button>
        </div>
    );
}

// Wrap the Login component with the HOC before exporting
const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
