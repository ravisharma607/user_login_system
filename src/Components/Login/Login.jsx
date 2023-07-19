import React, { useState } from 'react'
import './Login.css'
import img from './Img/loto.png'
import open_eye from './Img/open.svg'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    // To Redirect The Page
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const userLogin = (event) => {
        event.preventDefault();
        axios.post("https://userapi-production-1198.up.railway.app/login", user)
        .then((res) => {
                const {success, message} = res.data;
                if(success){
                    toast.success(message + ` ${user.username}`);
                    setTimeout(() => {
                        setLoginUser(res.data.user);
                        navigate("/");
                    }, 5000);
                }
                else{
                    toast.error(message)
                }
            })
            .catch((e) => {
                toast.error('Invalid User')
            });
    };


    // Password Visible n Invisible
    function togglePasswordVisibility() {
        let passwordInput = document.getElementById("loginPasswordInput");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    return (
        <>
                    <ToastContainer />

            <div className="container">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="form">
                    <form>
                        <h1>Log in to get started</h1>
                        <div className="field username">
                            <input type="text" name="username" value={user.username} placeholder='username' onChange={handleChange} required />
                        </div>
                        <div className="field password">
                            <input type="password" name="password" value={user.password} id='loginPasswordInput' placeholder='password' onChange={handleChange} required />
                            <span className="togglePassword" onClick={togglePasswordVisibility}><img src={open_eye} alt="" /></span>
                        </div>
                        <div className="action">
                            <div className='checkbox flex'>
                                <input type="checkbox" name="keepLoggedIn" />
                                <label htmlFor="">Keep me logged in</label>
                            </div>
                            <div>
                                <a>Forget password</a>
                            </div>
                        </div>
                        <div >
                            <button className="btn" onClick={userLogin}>Log In</button>
                        </div>
                        <div className='redirect'>
                            <span>Don't Have An Account.? <a onClick={() => navigate("/register")}>Sign Up</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login