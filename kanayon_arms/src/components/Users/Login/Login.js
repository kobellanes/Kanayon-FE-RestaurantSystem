import React, { useState } from 'react';
import "./Login.css"
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../../../src/http';
import { setAccounts } from '../../../redux/actions/actions';

function Login() {
    const dispatch = useDispatch();
    const accounts = useSelector((state) => state.allAccounts.account);

    //SIGNIN
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //CREATE
    const [isFirst, setisFirst] = useState('');
    const [isLast, setisLast] = useState('');
    const [isEmail, setisEmail] = useState('');
    const [isPassword, setisPassword] = useState('');
    const [isConfirmPassword, setisConfirmPassword] = useState('');
    const [isGcash, setisGcash] = useState('');

    const Login = (e) => {
        http.get('accounts').then(result => {
            dispatch(setAccounts(result.data));

            const newAccount = result.data;

            let ind = newAccount.findIndex((acc) => acc.isPassword == password && acc.isEmail == email);
            if (ind != -1) {
                const user_id = newAccount[ind].id;
                const user_status = newAccount[ind].isStatus;
                console.log(user_id);
                console.log(user_status);
                localStorage.setItem("user_id", user_id);
                localStorage.setItem("user_status", user_status);

                if (user_status == "ADMIN") {
                    window.location.href = '/admin';
                } else {
                    window.location.href = '/';
                }
            } else {    //WRONG PASSWORD OR EMAIL
                alert('Invalid Email or Password!');    //Alert will be changed
                setEmail('');
                setPassword('');
            }

        }).catch(error => console.log(error.message));
    }

    const Create = (e) => {
        e.preventDefault();

        http.get('accounts').then(result => {
            dispatch(setAccounts(result.data));
            const newAccount = result.data;

            if (isFirst == "" || isLast == "" || isEmail == "" || isPassword == "" || isConfirmPassword == "" || isGcash == "") {
                alert("Fields cannot be empty!"); //ALERT TO BE CHANGED!
            }

            const account = {
                isFirst: isFirst,
                isLast: isLast,
                isEmail: isEmail,
                isPassword: isPassword,
                isGcash: isGcash,
                isStatus: "ACTIVE",
            }

            if (isPassword == isConfirmPassword) {
                http.post('accounts', account).then((result) => {

                    let ind = newAccount.findIndex((acc) => acc.isEmail == isEmail);
                    if (ind != -1) {
                        notifyError(result.data.message);
                        setisEmail('');
                    } else {
                        if (result.data.prompt == 1) {
                            notifySuccess(result.data.message);
                            newAccount.push(account);

                            dispatch(setAccounts(newAccount));
                            setisFirst('');
                            setisLast('');
                            setisEmail('');         //EMAIL MUST BE CHECKED
                            setisPassword('');
                            setisConfirmPassword('');
                            setisGcash('');         //GCASH MUST BE CHECKED
                            //Checkbox must be unchecked

                            http.get('accounts').then(result => {
                                dispatch(setAccounts(result.data));

                            }).catch(err => console.log(err.message));
                        }
                    }

                });
            } else {
                setisPassword('');
                setisConfirmPassword('');
                alert("Password didn't match");  //Alert will be changed
            }
        });
    }

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
    };

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
                                        <input type="email" className="input llanesk-input bg-light bg-gradient mb-4 form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required autoComplete="on" />
                                        <label className="position-absolute fs-6" htmlFor="email">Email</label>
                                    </div>

                                    <div className="llanesk-input-field d-flex flex-column position-relative px-2 form-group">
                                        <input type="password" className="input llanesk-input bg-light bg-gradient mb-4 form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
                                        <label className="position-absolute fs-6" htmlFor="password">Password</label>
                                    </div>

                                    <div className="llanesk-input-field mt-3 d-flex flex-column position-relative px-2">
                                        <a onClick={Login} className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Sign in</a>
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

            <div className="llanesk-offcanvas offcanvas text-bg-light" id="offcanvas" tabIndex="-1">
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
                                        <input className="form-control w-50 me-2" value={isFirst} onChange={(e) => setisFirst(e.target.value)} type="text" name="firstname" placeholder="First name" required />
                                        <input className="form-control w-50 ms-2" value={isLast} onChange={(e) => setisLast(e.target.value)} type=" text" name="lastname" placeholder="Last name" required />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control col-8" value={isEmail} onChange={(e) => setisEmail(e.target.value)} type="email" name="email" placeholder="Email Address" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control l col-8" type="password" name="password" value={isPassword} onChange={(e) => setisPassword(e.target.value)} placeholder="New Password" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control l col-8" type="password" name="password" value={isConfirmPassword} onChange={(e) => setisConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input className="form-control col-8" value={isGcash} onChange={(e) => setisGcash(e.target.value)} type="number" name="number" placeholder="GCash Number" required />
                                </div>

                            </div>

                            <div className="mt-4 form-group">
                                <label className="text-start">
                                    <input className="me-2" type="checkbox" name="check" required />
                                    By clicking sign up, I accept the <a className="text-decoration-none" href="#">Terms of Use</a> and <a className="text-decoration-none" href="#">Privacy Policy</a>.
                                </label>

                            </div>

                            <div className="col-12 text-center py-4">
                                <button onClick={Create} className="col-6 btn btn-success llanesk-register-signup fw-bolder" name="submit" type="submit">Sign Up</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </>

    );
}
export default Login;