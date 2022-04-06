
//link to video tutorial
//https://youtu.be/7qyjYeF0074



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    //handle input
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({ ...user, [name]: value })
    }

    //handle login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (res.status === 400 || !res) {
                window.alert("InValid Credentials")
            } else {
                window.alert("Login Successfull");
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow" id='box'>
                <div className="row">
                    <div className="col-md-5 p-5 d-flex flex-column align-items-center text-white justify-content-center" id='home'>
                        <h1 className="display-4 fw-bolder">Welcome Back,</h1>
                        <p className="lead text-center">Enter Your Details to Login</p>
                        <h5 className='mb-4'>Or</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                        <div class="d-flex justify-content-between py-4 my-4 border-top">

                            <ul class="list-unstyled d-flex fs-5">
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>

                    </div>
                    <div className="col-md-6 p-5 rounded-pill">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control rounded-pill" id="email" name="email" value={user.email} onChange={handleChange} required />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control rounded-pill" id="password" name="password" value={user.password} onChange={handleChange} required />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me!</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-50 mt-4 rounded-pill">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
