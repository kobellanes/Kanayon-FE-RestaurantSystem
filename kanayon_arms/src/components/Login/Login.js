import React from 'react';
import "./Login.css"
import logo from '../../assets/logo.jpg';
import Header from '../Header/Header';

function Login() {
    return (
        <>
            <Header></Header>

            <main className="llanesk-login container-fluid bg-black bg-gradient pt-5 pb-0">

                <div className="py-0 mt-5 pt-4">

                    <div className="d-flex justify-content-center align-items-center mt-5 pt-1">
                        <div className="row llanesk-row rounded-4 shadow p-2 mb-5 position-relative">

                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill z-2">
                                <img className="rounded-pill llanesk-badge" src={logo} />
                            </span>

                            <div className="col-md-6 llanesk-side-img rounded-2">

                                <div className="llanesk-text position-absolute text-md-center">
                                    <p className="text-center fs-5 fst-italic fw-normal text-light ">Ala Eh! Ay bat ga kasarap dine!</p>
                                </div>
                            </div>

                            <div className="col-md-6 right d-flex justify-content-center align-items-center position-relative">
                                <div className="llanesk-box">
                                    <header className="mb-4 fw-bold text-center">
                                        Sign in

                                    </header>

                                    <div className="llanesk-input-field d-flex flex-column position-relative px-2">
                                        <input type="text llanesk-text" className="input llanesk-input bg-light bg-gradient mb-4 " id="email" required autocomplete="on" />
                                        <label className="position-absolute fs-6" for="email">Email</label>
                                    </div>

                                    <div className="llanesk-input-field d-flex flex-column position-relative px-2">
                                        <input type="password" className="input llanesk-input bg-light bg-gradient mb-4" id="password" required />
                                        <label className="position-absolute fs-6" for="password">Password</label>
                                    </div>

                                    <div className="llanesk-input-field mt-3 d-flex flex-column position-relative px-2">
                                        <a href="/admin" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Sign in</a>
                                    </div>

                                    <div className="mt-md-5">
                                        <div className="mt-4 text-center">
                                            <span className="llanesk-register fw-light text-dark">Don't have an account yet? <a className="fw-bold text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Register here</a></span>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </>

    );
}
export default Login;