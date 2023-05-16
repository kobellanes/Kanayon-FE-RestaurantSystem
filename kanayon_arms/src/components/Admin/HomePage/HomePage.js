import React, { useEffect } from 'react';
import "./HomePage.css"
import http from '../../../http';
import { useState } from 'react';
import { setAccounts } from '../../../redux/actions/actions';

function AdminHomePage() {
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');

    const fetchAccount = async () => {
        http.get('accounts').then(result => {
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {
                window.location.href = '/login';
            } else if (filter[0].isStatus === "ADMIN") {
                setData(filter[0].isStatus);
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
                                    <li className="active"><a href="/admin" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-house me-2"></i>Dashboard</a></li>

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

                                    <li className="">
                                        {/*  */}
                                        <a href="/" onClick={logout} className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>Logout
                                        </a>
                                    </li>
                                </ul>

                            </div>


                            <div className="dese-adminnav-content content ">
                                <h4 className="austriahd">Welcome Admin!</h4>

                                <div className="justify-content-center align-items-center text-center">
                                    <button className="austriakyla btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i class="fa-solid fa-play pe-2"></i>Let's Get Started!</button>
                                </div>

                                <div className="justify-content-start align-items-start text-start">
                                    <div className="austriakyla offcanvas offcanvas-bottom p-3 pb-0" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBot" data-bs-scroll="true" data-bs-backdrop="false">
                                        <div className="austriakyla offcanvas-header border-bottom">

                                            <h3 className="austriakyla offcanvas-title fw-bold" id="offcanvasBottomLabel">User's Manual</h3>

                                            <button type="button" className="btn-close text-reset mb-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="austriakyla offcanvas-body medium mt-1">
                                            <div className="container">
                                                <div className="austria-orderfunction-container-start lh-5 container p-3 rounded-2">
                                                    <ol>
                                                        <li>To log in to the admin panel, go to the login page and enter your username and password.</li>
                                                        <li>After logging in, you will see the dashboard. This page provides an overview of the restaurant's performance, including list of users, stock list, order list and inventory report.</li>
                                                        <li>To manage users, click on the "List of users". Here, you can see active users and you can ban the selected user.</li>
                                                        <li>To manage the menu, click on the "Stock list". Here, you can add, edit, and delete menu items.</li>
                                                        <li>To manage orders, click on the "Orders List". Here, you can view all the orders placed by customers. You can also update the status of the orders, such as "processing" or "completed."</li>
                                                        <li>To view reports, click on the "Inventory Report". Here, you can view sales report.</li>
                                                        <li>To log out of the admin panel, click on the "Logout" button at the left side of the screen.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default AdminHomePage;