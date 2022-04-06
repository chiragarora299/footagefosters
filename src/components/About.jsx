import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return(
        <div>
            <section id="about" id="contentbox">
            <div className="container my-10 py-5">
                <div className="row">
                    <div className="col-md-5">
                       <img src="/assets/about3.png" alt="About Us" className="w-100 mt-5"/>
                    </div>
                    <div className="col-md-6 px-5 py-2">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1><hr className="w-50"/>
                        <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ab optio aliquid rerum delectus itaque consequatur repellendus aut aspernatur laboriosam iure ipsum quaerat vel ipsa similique reprehenderit debitis, minima culpa ipsam. Saepe numquam placeat fuga deserunt beatae ad sint autem repellat aspernatur, nulla eligendi vel, nam facilis odit, laborum expedita.</p>
                        <NavLink to="/service" className="btn btn-primary rounded-pill px-4 py-2">Get Started</NavLink>
                        <NavLink to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
}
export default About;
