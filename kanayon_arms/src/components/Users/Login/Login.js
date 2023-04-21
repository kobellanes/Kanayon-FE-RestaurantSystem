import React, { useState } from 'react';
import "./Login.css"
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';



function Login() {
    const accounts = useSelector((state) => state.allAccounts.account);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signin = () => {   //This Function still has some errors I'll get back to it in backend
        accounts.map((account, index) => {
            const adminEmail = account.email;
            const adminPassword = account.password;

            if (email == adminEmail && password == adminPassword) {
                console.log('success');
                window.location.href = '/admin';

            } else {
                console.log('invalid');
                setEmail('');
                setPassword('');

            }

        });


    }

    const notifyDanger = () => {
        toast.danger('Try', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }


    const notifySuccess = () => {
        toast.success('You Successfully Created an Account!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }


    return (
        <>
            <Header></Header>

            <main className="llanesk-login container-fluid pt-4 pb-0">

                <div className="py-0">

                    <div className="d-flex justify-content-center align-items-center mt-5 pt-1">
                        <div className="row llanesk-row rounded-4 shadow p-2 mb-5 position-relative">

                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill z-2">
                                <img className="rounded-pill llanesk-badge" src={require('../../../assets/logo.jpg')} />
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

                                    <div className="llanesk-input-field d-flex flex-column position-relative px-2 form-group">
                                        <input type="email" className="input llanesk-input bg-light bg-gradient mb-4 form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required autocomplete="on" />
                                        <label className="position-absolute fs-6" for="email">Email</label>
                                    </div>

                                    <div className="llanesk-input-field d-flex flex-column position-relative px-2 form-group">
                                        <input type="password" className="input llanesk-input bg-light bg-gradient mb-4 form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
                                        <label className="position-absolute fs-6" for="password">Password</label>
                                    </div>

                                    <div className="llanesk-input-field mt-3 d-flex flex-column position-relative px-2">
                                        <a href="/admin" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Sign in</a>
                                    </div>

                                    <div className="mt-md-5">
                                        <div className="mt-4 text-center">
                                            <span className="llanesk-register fw-light text-dark">Don't have an account yet?<a className="ps-1 llanesk-reg fw-bold text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">Register here</a></span>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main >

            <div className="llanesk-offcanvas offcanvas text-bg-light" id="offcanvas" tabindex="-1">
                <div className="offcanvas-header mb-0 pb-2">
                    <h3 className="llanesk-offcanvas-title offcanvas-title fw-bolder text-dark">Registration Form</h3>
                    <button type="button" className="llanesk-offcanvas-btn-close btn-close btn-close-dark " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body small p-0">

                    <h6 className="llanesk-offcanvas-description text-start px-3 pb-3 border-bottom text-secondary">Join Our Community, Parine't Sumali Kanayon!</h6>

                    <div className="container px-3">
                        <form className="form-signup">

                            <div className="mt-4 form-group">
                                <div className="row">
                                    <div className="text-center d-flex flex-row">
                                        <input className="form-control w-50 me-2" type="text" name="firstname" placeholder="First name" required />
                                        <input className="form-control w-50 ms-2" type=" text" name="lastname" placeholder="Last name" required />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control col-8" type="email" name="email" placeholder="Email Address" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control l col-8" type="password" name="password" placeholder="New Password" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control col-8" type="number" name="number" placeholder="GCash Number" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <label className="text-start">
                                    <input className="me-2" type="checkbox" name="check" required />
                                    By clicking sign up, I accept the <a className="text-decoration-none" href="#">Terms of Use</a> and <a className="text-decoration-none" href="#">Privacy Policy</a>.
                                </label>

                            </div>

                            <div className="col-12 text-center py-4">
                                <button onClick={notifySuccess} className="col-6 btn btn-success llanesk-register-signup fw-bolder" name="submit" type="submit">Sign Up</button>
                                <ToastContainer />
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </>

    );
}
export default Login;