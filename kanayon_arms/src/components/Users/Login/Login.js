import React, { useState } from 'react';
import "./Login.css"
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../../http';
import { setAccounts } from '../../../redux/actions/actions';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputMask } from "primereact/inputmask";

function Login() {
    const dispatch = useDispatch();
    const accounts = useSelector((state) => state.allAccounts.account);

    //SIGNIN
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invprompt, setInvprompt] = useState('');

    //CREATE
    const [isFirst, setisFirst] = useState('');
    const [isLast, setisLast] = useState('');
    const [isAddress, setisAddress] = useState('')
    const [isEmail, setisEmail] = useState('');
    const [isPassword, setisPassword] = useState('');
    const [isConfirmPassword, setisConfirmPassword] = useState('');
    const [isGcash, setisGcash] = useState('');
    const [error, setError] = useState('');
    const [prompt1, setPrompt1] = useState('');
    const [prompt2, setPrompt2] = useState('');
    const [prompt3, setPrompt3] = useState('');

    const Login = (e) => {
        e.preventDefault();

        // const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;           //EMAIL ADD
        // if (regEx.test(email)) {
        //     if (password == "") {
        //         setMessage2("* Please fill out the password field.");
        //         setMessage('');
        //         setInvprompt('');
        //     } else {

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
            } else {   //WRONG PASSWORD OR EMAIL
                // alert('Invalid Email or Password!');    //Alert will be changed
                setInvprompt('* Invalid Email or Password!');
                setEmail('');
                setPassword('');
            }

        }).catch(error => console.log(error.message));

        //     }
        // } else if (!regEx.test(email) && email != "" && password == "") {
        //     setMessage("* Please complete email address following '@'. ");
        //     setMessage2('* Please fill out the password field.');
        //     setInvprompt('');
        // } else if (!regEx.test(email) && email != "") {
        //     setMessage("* Please complete email address following '@'. ");
        //     setMessage2('');
        //     setInvprompt('');
        // } else if (email == "" && password == "") {
        //     setMessage("* Please fill out the email address field.");
        //     setMessage2("* Please fill out the password field.");
        //     setInvprompt('');
        // } else if (email == "") {
        //     setMessage("* Please fill out the email address field.");
        //     setMessage2('');
        //     setInvprompt('');
        // }

    }

    const Create = (e) => {
        e.preventDefault();
        const regExp = /.{8,}/;
        const letters = /^[A-Za-z]+$/;

        if ((letters.test(isFirst)) && letters.test(isLast) && isValidPhoneNumber(isGcash)) {

            if (regExp.test(isPassword)) {

                if ((isGcash.length != 0) && (isValidPhoneNumber(isGcash))) {
                    http.get('accounts').then(result => {
                        dispatch(setAccounts(result.data));
                        const newAccount = result.data;

                        const account = {
                            isFirst: isFirst,
                            isLast: isLast,
                            isAddress: isAddress,
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
                                        setisAddress('');
                                        setisEmail('');
                                        setisPassword('');
                                        setisConfirmPassword('');
                                        setisGcash('');         //GCASH MUST BE CHECKED

                                        //NO PROMPT
                                        setPrompt1('');
                                        setPrompt2('');
                                        setError('');

                                        http.get('accounts').then(result => {
                                            dispatch(setAccounts(result.data));

                                        }).catch(err => console.log(err.message));
                                    }
                                }

                            });

                        } else {
                            setisPassword('');
                            setisConfirmPassword('');
                            setPrompt1("* Password didn't match.");
                            setPrompt2("* Password didn't match.");
                        }
                    });

                } else if ((isGcash.length == 0) || (!(isValidPhoneNumber(isGcash)))) {
                    setisGcash('');
                    setPrompt3("* Please input a valid Gcash number");

                }

            } else if (!regExp.test(isPassword)) {
                setPrompt1("* Password must be at least 8 characters. We recommend your password have at least one uppercase letter, one lowercase letter, one number, and one special character.");
                setPrompt2("* Password must be at least 8 characters. We recommend your password have at least one uppercase letter, one lowercase letter, one number, and one special character.");
                setisPassword('');
                setisConfirmPassword('');
            }

            // if ((letters.test(isFirst)) && letters.test(isLast) && isValidPhoneNumber(isGcash))

        } else if ((!(letters.test(isFirst) && letters.test(isLast))) && (isGcash.length == 0) || (!(isValidPhoneNumber(isGcash)))) {
            setisFirst('');
            setisLast('');
            setError("* Your name cannot have numbers.");
            setPrompt3("* Please input a valid Gcash number");

        } else if (!(letters.test(isFirst) && letters.test(isLast))) {
            setisFirst('');
            setisLast('');
            setError("* Your name cannot have numbers.");
        }

        else if ((isGcash.length == 0) || (!(isValidPhoneNumber(isGcash)))) {
            setisGcash('');
            setPrompt3("* Please input a valid Gcash number");

        }

    }

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "bottom-center",
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
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
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

                                    {/* FORM SIGN IN */}
                                    <form className="pt-4" onSubmit={Login}>
                                        <div className="llanesk-input-field d-flex flex-column position-relative px-2 mb-4 form-group">

                                            <input type="email" className="input llanesk-input bg-light bg-gradient form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required />

                                            <label className="position-absolute fs-6 ms-1" htmlFor="email"><i className="fa-solid fa-envelope me-1"></i>Email</label>

                                        </div>

                                        <div className="llanesk-input-field d-flex flex-column position-relative px-2 mb-4 form-group">
                                            <input type="password" className="input llanesk-input bg-light bg-gradient mb-2 form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
                                            <label className="position-absolute fs-6 ms-1" htmlFor="password"><i className="fa-solid fa-lock me-1"></i>Password</label>

                                        </div>

                                        {
                                            invprompt && email.length <= 0 && password.length <= 0 ?
                                                <h6 className="text-center llanesk-login-prompt mt-0 pb-2 text-danger text-wrap fw-bold">{invprompt}</h6>
                                                :
                                                ""
                                        }

                                        <div className="llanesk-input-field d-flex flex-column position-relative px-2">
                                            <input className="btn btn-primary fw-bold" type="submit" value="Sign In" />
                                        </div>

                                    </form>

                                    {/* FORM EXIT */}

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
                    <h3 className="llanesk-offcanvas-title offcanvas-title fw-bolder text-dark">Register</h3>
                    <button type="button" className="llanesk-offcanvas-btn-close btn-close btn-close-dark " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body small p-0">

                    <h6 className="llanesk-offcanvas-description text-start px-3 pb-3 border-bottom text-secondary fw-light">Parine't Sumali, Pusong Kanayon!</h6>

                    <div className="container px-3">

                        {/* FORM REGISTER */}

                        <form className="form-signup" onSubmit={Create}>

                            <div className="mt-4 form-group">
                                <div className="row">
                                    <div className="text-center d-flex flex-row">
                                        <input className="llanesk-login-form-control form-control w-50 me-2 fw-light" value={isFirst} onChange={(e) => setisFirst(e.target.value)} type="text" name="firstname" placeholder="First Name" required />
                                        <input className="llanesk-login-form-control form-control w-50 ms-2 fw-light" value={isLast} onChange={(e) => setisLast(e.target.value)} type="text" name="lastname" placeholder="Last Name" required />
                                    </div>
                                </div>
                            </div>

                            {
                                error && (isFirst == "" || isLast == "") ?
                                    <h6 className="llanesk-login-prompt mt-2 text-danger text-wrap fw-light text-center">{error}</h6>
                                    :
                                    ""
                            }

                            <div className="mt-3 form-group">
                                <div className="text-center">
                                    <input className="llanesk-login-form-control form-control col-8 fw-light" value={isAddress} onChange={(e) => setisAddress(e.target.value)} type="text" name="address" placeholder="House Address" required />
                                </div>

                            </div>

                            <div className="mt-3 form-group">
                                <div className="text-center">
                                    <input className="llanesk-login-form-control form-control col-8 fw-light" value={isEmail} onChange={(e) => setisEmail(e.target.value)} type="email" name="email" placeholder="Email Address" required />
                                </div>

                            </div>


                            <div className="mt-3 form-group">
                                <div className="text-center d-flex flex-row align-items-center">
                                    <input className="llanesk-login-form-control form-control l col-12 fw-light" type="password" name="password" value={isPassword} onChange={(e) => setisPassword(e.target.value)} placeholder="Password" required />

                                    <div className="llanesk-login-validate col-0">

                                        {
                                            isPassword.length <= 0 ?
                                                ""
                                                :
                                                isPassword.length <= 7 ?
                                                    <i className="text-danger fa-solid fa-x"></i>
                                                    :
                                                    <i className="text-success fa-solid fa-check"></i>
                                        }
                                    </div>

                                </div>

                            </div>

                            {
                                isPassword.length <= 0 ?
                                    ""
                                    : isPassword.length <= 7 ?
                                        <h6 className="llanesk-login-prompt mt-2 text-danger text-wrap fw-light text-center">* Password must contain at least 8 characters.</h6>
                                        :
                                        ""

                            }

                            {/* SHOW PASSWORD FEATURE NEXT TIME<i className="fa-regular fa-eye-slash" id="togglePassword"></i> */}

                            {
                                prompt1 && isPassword == "" ?
                                    <h6 className="llanesk-login-prompt mt-2 text-danger text-wrap fw-light text-center">{prompt1}</h6>
                                    :
                                    ""
                            }

                            <div className="mt-3 form-group">
                                <div className="text-center d-flex flex-row align-items-center">
                                    <input className="llanesk-login-form-control form-control l col-12 " type="password" name="password" value={isConfirmPassword} onChange={(e) => setisConfirmPassword(e.target.value)} placeholder="Repeat Password" required />

                                    <div className="llanesk-login-validate col-0">

                                        {
                                            isConfirmPassword.length <= 0 ?
                                                ""
                                                :
                                                isConfirmPassword == isPassword ?
                                                    <i className="text-success fa-solid fa-check"></i>
                                                    :
                                                    <i className="text-danger fa-solid fa-x"></i>

                                        }
                                    </div>
                                </div>

                            </div>

                            {
                                isConfirmPassword.length <= 0 ?
                                    ""
                                    : isConfirmPassword != isPassword ?
                                        <h6 className="llanesk-login-prompt mt-2 text-danger text-wrap fw-light text-center">* Password is not the same.</h6>
                                        :
                                        ""

                            }

                            {
                                prompt2 && isConfirmPassword == "" ?
                                    <h6 className="llanesk-login-prompt mt-2 text-danger text-wrap fw-light text-center">{prompt2}</h6>
                                    :
                                    ""
                            }

                            <div className="mt-3 form-group ">
                                <div className="text-center d-flex flex-row align-items-center">

                                    <div className="col-12">

                                        <InputMask type="tel" className="InputMask form-control rounded-2 opacity-75 mb-1" value={isGcash} onChange={(e) => setisGcash(e.target.value)}
                                            mask="+63 999 999 9999"
                                            slotChar="+63             "
                                            placeholder="+63"
                                            required
                                        >
                                        </InputMask>
                                    </div>

                                    <div className="llanesk-login-validate">

                                        {
                                            isGcash.length <= 0 ?
                                                ""
                                                :
                                                isGcash && isValidPhoneNumber(isGcash) ?
                                                    <i className="text-success fa-solid fa-check"></i>
                                                    :
                                                    <i className="text-danger fa-solid fa-x"></i>
                                        }
                                    </div>

                                </div>

                                {
                                    isGcash.length != 0 && isValidPhoneNumber(isGcash) ?
                                        ""
                                        : isGcash.length != 0 ?
                                            <h6 className="llanesk-login-prompt mt-0 text-danger text-wrap fw-light text-center">* Please input a valid Gcash number.</h6>
                                            :
                                            <h6 className="llanesk-login-prompt mt-0 text-danger text-wrap fw-light text-center">{prompt3}</h6>
                                }



                            </div>

                            {/* <PhoneInput
                                        defaultCountry="PH" className="d-flex flex-row phoneInput" value={isGcash} onChange={(e) => setisGcash(e.target.value)} placeholder=" Gash Number"
                                        mask="+63" /> */}

                            {/* <input className="form-control col-8" value={isGcash} onChange={(e) => setisGcash(e.target.value)} type="number" name="number" placeholder="GCash Number" required /> */}

                            <div className="col-12 text-center py-4">
                                <input type="submit" className="col-6 btn btn-success llanesk-register-signup fw-bolder" name="submit" value="Sign Up"></input>
                            </div>

                        </form>

                        <div className="mt-2 pb-3 form-group text-center">
                            <label className="">
                                By clicking sign up, I accept the <a className="text-decoration-none" href="#">Terms of Use</a> and <a className="text-decoration-none" href="#">Privacy Policy</a>.
                            </label>

                        </div>


                    </div>
                </div >
            </div >

        </>

    );
}
export default Login;