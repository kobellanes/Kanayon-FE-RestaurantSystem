import React from 'react';
import "./Login.css"
import logo from '../../assets/logo.jpg';

const backgroundImage = {
    backgroundImage: "url(" + require('../../assets/login.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const Login = () => {
    return (
        <>
            <main className="login container-fluid bg-black bg-gradient">

                <div className="wrapper">

                    <div className="container main affecting1 d-flex justify-content-center align-items-center ">
                        <div className="row affecting2 rounded-4 shadow p-2 mb-5 position-relative">

                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill z-2">
                                <img className="rounded-pill try" src={logo} />
                            </span>

                            <div className="col-md-6 side-image rounded-2`" style={backgroundImage}>
                                <div className="text affecting3 position-absolute text-md-center">
                                    <p className="fs-5 fst-italic fw-normal text-light">Kanayon Inasal</p>
                                </div>
                            </div>

                            <div className="col-md-6 right d-flex justify-content-center align-items-center position-relative">
                                <div className="input-box">
                                    <header className="mb-4 fw-bold text-center">
                                        Sign in

                                    </header>

                                    <div className="input-field d-flex flex-column position-relative px-2">
                                        <input type="text affecting3" className="input affecting4 bg-light bg-gradient mb-4 " id="email" required autocomplete="on" />
                                        <label className="position-absolute fs-6" for="email">Email</label>
                                    </div>

                                    <div className="input-field d-flex flex-column position-relative px-2">
                                        <input type="password" className="input affecting4 bg-light bg-gradient mb-4" id="password" required />
                                        <label className="position-absolute fs-6" for="password">Password</label>
                                    </div>

                                    <div className="input-field mt-3 d-flex flex-column position-relative px-2">
                                        <a href="/admin" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Sign in</a>
                                    </div>

                                    <div className="signin text-center fs-6 mt-5">
                                        <span className="fw-light text-dark">Don't have an account yet? <a className="fw-bold text-dark" href="#">Register here</a></span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </>
    );
}
export default Login;