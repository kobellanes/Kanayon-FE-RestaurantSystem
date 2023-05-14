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
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="#"><i className="fa-brands fa-google-pay me-2"></i>Paid Orders</a></li>
                                            <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="#"><i className="fa-solid fa-check me-2"></i>Completed Orders</a></li>
                                        </ul>
                                    </li>

                                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-money-check-dollar me-2"></i>Inventory Report</a></li>

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

                                <button className="austriakyla btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Let's Get Started!</button>
                                <div className="austriakyla offcanvas offcanvas-bottom p-5" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBot">
                                    <div className="austriakyla offcanvas-header">
                                        <h5 className="austriakyla offcanvas-title" id="offcanvasBottomLabel"> We have prepared this user's manual. Please take a moment to read through it before placing your order. </h5>
                                        <button type="button" class="btn-close text-reset mb-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="austriakyla offcanvas-body medium">
                                        <li>Our menu on the online ordering platform is the same as our physical menu. You can choose from a variety of inasal dishes, other Filipino favorites, sides, and beverages. </li>
                                        <li>Once you have selected your desired items, add them to your cart and proceed to checkout. You may be required to create an account and provide your name and address.</li>
                                        <li>Payment can be made through the online platform using gcash.</li>
                                        <li>We offer both dine-in and take-out services. For take-out orders, you may call ahead to place your order and avoid waiting in line.</li>
                                        <li>We value your feedback and suggestions, as they help us improve our service and menu offerings. If you have any comments or concerns about your online ordering experience, please contact us in Facebook or visit Kanayon Inasal to inform our staff.</li>
                                        <p className="kylakylap">Thank you for choosing Kanayon Inasal. We hope you enjoy your meal and come back to visit us soon!</p>
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