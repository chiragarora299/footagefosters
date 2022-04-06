
//link to video tutorial
//https://youtu.be/7qyjYeF0074



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

const Register = () => {

    const history=useHistory()

    //connecting backend with front end web page
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });


    //handle inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password } = user;
        try {
            const res = await fetch('/register', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Already Used Details");
            }else {
                window.alert("Registered Successfully");
                history.push('/login')
            }
        } catch (error) {
            console.log(error);
        } 
    }


    return (

        //main web page content
        <div>
            <div className="container shadow " id='box'>
                <div className="row justify-content-end">
                    <div className="col-md-5 p-5 d-flex flex-column align-items-center text-white justify-content-center order-2" id='home'>
                        <h1 className="display-4 fw-bolder">Create Account</h1>
                        <p className="lead text-center">Enter Your Details to Register</p>
                        <h5 className='mb-4'>Or</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                        <div class="d-flex justify-content-between py-4 my-4 border-top">

                            <ul class="list-unstyled d-flex fs-5">
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                <li class="ms-3"><a class="link-dark" href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>

                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
                        <form onSubmit={handleSubmit} method="POST">

                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control rounded-pill" id="username" name="username" value={user.username} onChange={handleInput} required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control rounded-pill" id="email" name="email" value={user.email} onChange={handleInput} required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control rounded-pill" id="password" name="password" value={user.password} onChange={handleInput} required />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                <label class="form-check-label" for="checkbox">I Agree Terms & Conditions </label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-50 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
