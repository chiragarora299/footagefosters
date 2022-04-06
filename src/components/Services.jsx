
//link to video tutorial
//https://youtu.be/7qyjYeF0074



import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <section id="service" id="contentbox">
                <div className="container ">
                    <div className="row">
                        <div className="col-12-md-8 mt-5">
                            {/* <h3 className="fs-5 text-center mb-0">Our Services</h3> */}
                            <h1 className="display-6  text-center mb-4"><b>O</b>ur <b>S</b>ervices</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Fully Responsive Layout</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">User Experience</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Creative Web Design</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Unique and Clean</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-star fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Creative Ideas</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5 mb-5">
                                <NavLink to="/" className="btn btn-primary rounded-pill px-4 py-2 ms-2">Know more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
export default Services;
