import React from 'react';
import "./Footer.css"
import logotext from '../../assets/KanayonFooter.png';

function Footer() {
    return (
        <>
            <main className="llanesk-footer mt-5 mx-auto">

                <div className="d-flex align-items-center justify-content-center">

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 mb-3">
                            <img className="llanesk-logofoot mb-2" src={require('../../assets/KanayonFooter.png')}></img>
                            <ul className="list-unstyled mb-md-4 mb-lg-0 text-light llanesk-list">
                                <li>We serve Chicken Inasal, Pork BBQ, </li>
                                <li> Pork Liempo just for you!</li>
                                <li> <b> Tuloy Ang Bange! Tara Tikme!</b> </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5 className="lh-lg fw-bolder llanesk-headline">Explore</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="llanesk-contacts text-decoration-none" href="/about">About Us</a></li>
                                <li className="lh-lg"><a className="llanesk-contacts text-decoration-none" href="/ordernow">Order Now</a></li>
                                <li className="lh-lg"><a className="llanesk-contacts text-decoration-none" href="/login">Register Now!</a></li>
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

                            <p>
                                <svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg><span>(+63) 939 490 3638</span>
                            </p>

                            <p>
                                <svg className="feather feather-mail me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg><span>kanayoninasal@gmail.com</span>
                            </p>

                            <br></br>
                            <br></br>

                        </div>

                        <p className="llanesk-contacts d-flex justify-content-center">
                            <a className="fs-5 me-5" href="https://www.facebook.com/kanayoninasal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg><span data-feather="facebook"></span></a>
                            <a className="fs-5" href="https://www.instagram.com/explore/locations/106845685483113/kanayon-inasal/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg><span data-feather="instagram"></span></a>
                        </p>

                    </div>

                    <div className="border-bottom border-3"></div>

                    <div className="col-md-12">
                        <div className="text-center justify-content-center">
                            <p> &copy;{new Date().getFullYear()} KANAYON INASAL - All Rights Reserved | Terms Of Service | Privacy Policy </p>
                        </div>
                    </div>
                </div>
            </main >
            {/* <div className="mt-4 container">
                <div className="row">

                    <div className="col">
                        <h4>KANAYON INASAL</h4>
                        <ul className="list-unstyled">
                            <li>Kanayon Inasal is a semi-casual </li>
                            <li>reataurant typewhich serves </li>
                            <li>Chicken Inasal, Pork BBQ, and Pork Liempo</li>
                        </ul>
                    </div>

                    <div className="col">

                        <h4>LOCATION</h4>
                        <ul className="list-unstyled">
                            <li>Brgy. Pagaspas</li>
                            <li>Tanauan, 4232 Batangas</li>


                        </ul>
                    </div>


                    <div className="col">

                        <h4>CONTACT</h4>
                        <ul className="list-unstyled">
                            <li>(+63) 939 490 3638</li>



                        </ul>
                    </div>


                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} KANAYON INASAL | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div> */}

        </>
    );
}
export default Footer;