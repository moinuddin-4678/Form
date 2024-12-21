import React, { useState } from "react";
import '../LoginRegister/LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerlink = () => {
        setAction('active');
    }

    const loginlink = () => {
        setAction('');
    }

    return (
        <div className={'wrapper ${action}'}>
            <div className="Form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="inputbox">
                        <input type="text" placeholder="Username" required/>
                        <FaUser  className="icon" />

                    </div>
                    <div className="inputbox">
                        <input type="password" placeholder="password" required/>
                        <FaUserLock className="icon"/>
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />RememberMe</label>
                        <a href="" onClick={registerlink}>Forget password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Dont have an acount <a href="">Register</a></p>
                    </div>
                </form>
            </div>


            <div className="Form-box register">
                <form action="">
                    <h1>Registeration</h1>
                    <div className="inputbox">
                        <input type="text" placeholder="Username" required/>
                        <FaUser  className="icon" />
                    </div>
                    <div className="inputbox">
                        <input type="email" placeholder="email" required/>
                        <SlEnvolope className="icon" />
                    </div>
                    <div className="inputbox">
                        <input type="password" placeholder="password" required/>
                        <FaUserLock className="icon"/>
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />I agree to the  terms and condition</label>
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Aldredy have an acount?<a href="" onClick={loginlink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>



    )
}
export default LoginRegister;