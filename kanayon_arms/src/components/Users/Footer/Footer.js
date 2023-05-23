import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <main className="llanesk-footer mt-5 mx-auto">

                <div className="container justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-6 col-lg-3 mb-3">
                            <img className="llanesk-logofoot mb-2" src={require('../../../assets/KanayonFooter.png')}></img>
                            <ul className="list-unstyled mb-md-4 mb-lg-0 text-light llanesk-list">
                                <li>We serve Chicken Inasal,  </li>
                                <li>Pork BBQ and Pork Liempo</li>
                                <li> Just for you!</li>
                                <li> <b> Tuloy Ang Bange! Tara Tikme!</b> </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5 className="lh-lg fw-bolder llanesk-headline">Explore</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><Link className="llanesk-contacts text-decoration-underline" to="/about">About Us</Link></li>
                                <li className="lh-lg"><Link className="llanesk-contacts text-decoration-underline" to="/ordernow">Order Now</Link></li>
                                <li className="lh-lg"><Link className="llanesk-contacts text-decoration-underline" to="/login">Register Now!</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5 className="lh-lg fw-bolder llanesk-headline">Visit Us</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0 text-light">
                                <li>Zone 1</li>
                                <li>Brgy. Pagaspas</li>
                                <li>Tanauan City, 4232</li>
                                <li>Batangas</li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 ms-auto">
                            <h5 className="lh-lg fw-bolder llanesk-headline">Contact Us</h5>

                            <p className="text-light">
                                <svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg><span>(+63) 939 490 3638</span>
                            </p>

                            <p className="text-light">
                                <svg className="feather feather-mail me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg><span>@gmail.com</span>
                            </p>


                        </div>

                        <p className="llanesk-contacts d-flex justify-content-center">
                            <Link className="fs-5 me-5" to="https://www.facebook.com/kanayoninasal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg><span data-feather="facebook"></span></Link>
                            <Link className="fs-5" to="https://www.instagram.com/explore/locations/106845685483113/kanayon-inasal/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg><span data-feather="instagram"></span></Link>
                        </p>

                    </div>

                    <div className="border-bottom border-3"></div>

                    <div className="col-md-12">
                        <div className="text-center justify-content-center text-light">
                            <p> &copy;{new Date().getFullYear()} KANAYON INASAL - All Rights Reserved | Terms Of Service | Privacy Policy </p>
                        </div>
                    </div>
                </div>
            </main >

        </>
    );
}
export default Footer;