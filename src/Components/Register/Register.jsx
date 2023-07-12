import React, { useState } from 'react'
import './Register.css'
import img from './Img/loto.png'
import open_eye from './Img/open.svg'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

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


    const userRegister = (event) => {
        event.preventDefault();
        const { username, password } = user;
        if (username && password) {
            axios.post("https://userapi-production-1198.up.railway.app/register", user)
            .then((res) => {
                    const {success, message} = res.data;
                    console.log(res.data);
                    if(success){
                        toast.success(message)
                        setTimeout(() => {
                            navigate("/login");
                        }, 5000);
                    }
                    else{
                        toast.error(message)
                    }
                })
                .catch((e) => {
                    toast.error(e)
                })
            }
            else{
                toast.error('Invalid Usser')
            }
    }

    // Password Visible n Invisible
    function togglePasswordVisibility() {
        let passwordInput = document.getElementById("registerPasswordInput");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    return (
        <>
            <div className="container">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="form">
                    <h1>Sign Up to get started</h1>
                    <form>
                        <div className="field username">
                            <input type="text" name="username" value={user.username} placeholder='username' onChange={handleChange} required/>
                        </div>
                        <div className="field password">
                            <input type="password" name="password" value={user.password} id="registerPasswordInput" placeholder='password' onChange={handleChange} required/>
                            <span className="togglePassword" onClick={togglePasswordVisibility}><img src={open_eye} alt="" /></span>
                        </div>
                        <div className="action">
                            <div className='checkbox'>
                                <input type="checkbox" name="keepLoggedIn" />
                                <label htmlFor="">Keep me logged in</label>
                            </div>
                            <div>
                                <a href="#">Forget password</a>
                            </div>
                        </div>
                        <div >
                            <button className="btn" onClick={userRegister}>Sign Up</button>
                        </div>
                        <div className='redirect'>
                            <span>Already Have An Account.? <a onClick={() => navigate("/login")}>Log In</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register