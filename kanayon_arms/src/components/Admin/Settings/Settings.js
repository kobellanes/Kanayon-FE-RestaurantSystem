import React, { useEffect } from 'react';
import http from '../../../http';
import { useState } from 'react';
import { setAccounts } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from 'react-toastify';

function Settings() {
    const accounts = useSelector((state) => state.allAccounts.account);
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');

    const [user, setUser] = useState('');

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confNewPass, setconfNewPass] = useState('');

    const [oldPassPrompt, setOldPassPrompt] = useState('');
    const [newPassPrompt, setNewPassPrompt] = useState('');
    const [confPassPrompt, setConfPassPrompt] = useState('');

    const fetchAccount = async () => {
        http.get('accounts').then(result => {
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {
                window.location.href = '/login';
            } else if (filter[0].isStatus === "ADMIN") {
                setData(filter[0].isStatus);
                setUser(filter[0]);
            } else {
                window.location.href = '/login';
            }

        });
    };

    useEffect(() => {
        fetchAccount();

    }, []);

    const logout = (e) => {
        localStorage.clear();

        window.location.href = '/'
    }

    const updateAccount = (e) => {
        e.preventDefault();

        const noEditAccount = user;

        const isValid = bcrypt.compareSync(oldPass, user.isPassword);

        if (isValid) {
            setOldPassPrompt('');

            const regExp = /.{8,}/;

            if (regExp.test(newPass)) {

                if (newPass == confNewPass) {
                    const password = newPass;
                    const hash = bcrypt.hashSync(password, 10);

                    const updatepass = {
                        isStatus: noEditAccount.isStatus,
                        isPassword: hash,
                    }

                    http.put(`accounts/${user.id}`, updatepass).then(result => {
                        notifySuccess();

                        setNewPassPrompt('');
                        setConfPassPrompt('');

                        setOldPass('');
                        setNewPass('');
                        setconfNewPass('')

                    }).catch(err => console.log(err.message));


                } else {
                    setNewPass('');
                    setconfNewPass('');

                    setNewPassPrompt('* Password is not the same.');
                    setConfPassPrompt('* Password is not the same.');
                }

            } else {
                setNewPassPrompt("* Password must contain at least 8 characters.");
                setConfPassPrompt('* Password must contain at least 8 characters.');

                setNewPass('');
                setconfNewPass('');

            }

        } else {
            setOldPass('');
            setOldPassPrompt("* Incorrect Password.");
        }

    }


    const notifySuccess = () => {
        toast.success("Password Updated", {
            position: "top-right",
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
            <div className="dese-adminnav-main main-container d-flex">
                {
                    data === "ADMIN" ?
                        <>
                            <div className="dese-adminnav-sidebar sidebar" id="side_nav">
                                <div className="dese-adminnav-header-box header-box px-2 pt-3 pb-4 d-flex flex-row align-items-center">
                                    <img className="dese-adminnav-logo rounded-pill ms-2" src={require('../../../assets/logo.jpg')}></img>
                                    <h5 className="text-light mt-2 ms-2 fw-light">Hello Admin!</h5>

                                </div>

                                <ul className="list-unstyled px-2">
                                    <li className=""><a href="/admin" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-house me-2"></i>Dashboard</a></li>

                                    <li className=" nav-item dropdown">
                                        <a className="nav-link px-3 py-2 d-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="fa-solid fa-users me-1"></i>
                                            List of Users
                                            <i className="dropdown-toggle ms-2"></i>
                                        </a>

                                        <ul className="dropdown-menu w-100">
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="/activeuser"><i className="fa-solid fa-circle me-2"></i>Active Users</a></li>
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="/banneduser"><i className="fa-solid fa-ban me-2"></i>Banned Users</a></li>
                                        </ul>
                                    </li>

                                    <li className=""><a href="/stocklist" className="text-decoration-none px-3 py-2 d-block justify-content-between"><i className="fa-solid fa-boxes-stacked me-2"></i>Stock List</a></li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link px-3 py-2 d-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-basket-shopping me-2"></i>
                                            Order List
                                            <i className="dropdown-toggle ms-2"></i>
                                        </a>

                                        <ul className="dropdown-menu w-100">
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="orderlist"><i className="fa-solid fa-pen me-2"></i>Pending Orders</a></li>
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="receive"><i className="fa-brands fa-google-pay me-2"></i>Paid Orders</a></li>
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="completed"><i className="fa-solid fa-check me-2"></i>Completed Orders</a></li>
                                        </ul>
                                    </li>

                                    <li className=""><a href="inventory" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-money-check-dollar me-2"></i>Inventory Report</a></li>

                                    <hr className="text-white mt-2" />

                                    <li className="active">
                                        {/*  */}
                                        <a href="acc-settings" className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-unlock fs-5 me-2"></i>Change Password
                                        </a>
                                    </li>

                                    <li className="">

                                        <a href="/" onClick={logout} className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>Logout
                                        </a>

                                    </li>

                                </ul>

                            </div>


                            <div className="dese-adminnav-content content">

                                <div className="m-5">
                                    <form className="form-control p-3" onSubmit={updateAccount}>

                                        <div className="llanesk-banneduserfunction-container-start container p-3 rounded-2">
                                            <p className="text-start m-0 fs-6">Please fill out all the required fields.</p>
                                        </div>

                                        <div className="mt-4 form-group">

                                            <div className="text-center d-flex flex-row align-items-center col-12">

                                                <label className="me-3 col-2 fw-bold">Email</label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    value={user.isEmail}
                                                    className="form-control"
                                                    placeholder="Menu Name"
                                                    disabled />
                                            </div>

                                        </div>

                                        <div className="mt-4 form-group">

                                            <div className="text-center d-flex flex-row align-items-center col-12">

                                                <label className="me-3 col-2 fw-bold">Current Password</label>
                                                <input
                                                    type="password"
                                                    value={oldPass}
                                                    onChange={(e) => setOldPass(e.target.value)}
                                                    className="form-control"
                                                    required />
                                            </div>
                                            {
                                                oldPass.length == 0 ?
                                                    <h6 className="text-danger text-center fw-normal mt-2">{oldPassPrompt}</h6>
                                                    :
                                                    ""
                                            }


                                        </div>


                                        <div className="mt-4 form-group">

                                            <div className="text-center d-flex flex-row align-items-center col-12">

                                                <label className="me-3 col-2 fw-bold">New Password</label>
                                                <input
                                                    type="password"
                                                    value={newPass}
                                                    onChange={(e) => setNewPass(e.target.value)}
                                                    className="form-control"
                                                    required />
                                            </div>

                                            {
                                                newPass.length == 0 ?
                                                    <h6 className="text-danger text-center fw-normal mt-2">{newPassPrompt}</h6>
                                                    :
                                                    ""
                                            }


                                        </div>

                                        <div className="mt-4 form-group">

                                            <div className="text-center d-flex flex-row align-items-center col-12">

                                                <label className="me-3 col-2 fw-bold">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    value={confNewPass}
                                                    onChange={(e) => setconfNewPass(e.target.value)}
                                                    className="form-control"
                                                    required />
                                            </div>

                                            {
                                                confNewPass.length == 0 ?
                                                    <h6 className="text-danger text-center fw-normal mt-2">{confPassPrompt}</h6>
                                                    :
                                                    ""
                                            }



                                        </div>


                                        <div className="mt-4 col-12 d-flex justify-content-end">

                                            <input className="btn btn-primary text-center rounded-1" type="submit" value="Submit" />

                                        </div>

                                    </form>
                                </div>
                            </div>

                        </>
                        :
                        <div className="llanesk-admin-loading m-0 p-0 container-fluid">
                            <div className="d-flex spinner-border justify-content-center container-fluid text-dark mt-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div>
        </>
    );
}

export default Settings;