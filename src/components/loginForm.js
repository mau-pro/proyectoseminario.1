import React from "react";
import { Link } from "react-router-dom";


const LoginForm = () => {
    return (
        <div className="login-box">
                <h1>Login Here</h1>
                <form>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Enter Username"></input >
                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter Password"></input >
                <Link to="/Admin" ><center><button type="button" class="btn btn-secondary">Secondary</button></center> </Link>
                <br/>
                <br/>
                   <a href="#">Lost your Password?</a>
                   
                </form>
        </div>
    )
    
}

export default LoginForm;

