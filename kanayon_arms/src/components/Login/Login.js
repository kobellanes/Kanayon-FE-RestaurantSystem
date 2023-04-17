import React from 'react';
import "./Login.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Login() {
    return (
        <>
            <Header></Header>

            <main className="llanesk-login container-fluid pt-5 pb-0">

                <div className="py-0 mt-5">

                    <div className="d-flex justify-content-center align-items-center mt-5 pt-1">
                        <div className="row llanesk-row rounded-4 shadow p-2 mb-5 position-relative">

                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill z-2">
                                <img className="rounded-pill llanesk-badge" src={require('../../assets/logo.jpg')} />
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
                                        <input type="email" className="input llanesk-input bg-light bg-gradient mb-4 " id="email" required autocomplete="on" />
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
                                            <span className="llanesk-register fw-light text-dark ">Don't have an account yet? <a className="llanesk-reg fw-bold text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">Register here</a></span>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <div className="llanesk-offcanvas offcanvas text-bg-light" id="offcanvas" tabindex="-1">
                <div className="offcanvas-header ">
                    <h5 className="offcanvas-title">Registration Form</h5>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form class="row g-3">
                        <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-4">
                            <label for="validationDefault02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div class="col-md-4">
                            <label for="validationDefaultUsername" class="form-label">Username</label>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationDefault03" class="form-label">City</label>
                            <input type="text" class="form-control" id="validationDefault03" required />
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault04" class="form-label">State</label>
                            <select class="form-select" id="validationDefault04" required >
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault05" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="validationDefault05" required />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div >
            </div >


            <Footer></Footer>
        </>

    );
}
export default Login;