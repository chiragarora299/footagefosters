
//link to video tutorial
//https://youtu.be/7qyjYeF0074



import React from 'react';
import About from './About';
import Services from './Services';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return(
        <div>
            <section id="home">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5 mb-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the fresh business perspective</h1>
                                <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem dicta delectus, numquam dolores dolore ullam tempore ipsa perspiciatis quis impedit, suscipit vitae incidunt, beatae accusamus nam perferendis! Officia culpa molestiae distinctio eligendi sint esse repellat totam delectus exercitationem minus minima deserunt amet quaerat a deleniti blanditiis debitis, asperiores ducimus!</p>
                                <div className="buttons d-flex justify-content-center">
                                    <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                                    <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default Home;
