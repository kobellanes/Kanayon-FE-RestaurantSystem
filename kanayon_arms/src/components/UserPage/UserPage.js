import React from 'react';
import UserFunction from '../UserFunction/UserFunction';

function UserPage() {
    return (
        <>
            <div className="dese-adminnav-main main-container d-flex">
                <div className="dese-adminnav-sidebar sidebar" id="side_nav">
                    <div className="dese-adminnav-header-box header-box px-2 pt-3 pb-4 d-flex flex-row align-items-center">
                        <img className="dese-adminnav-logo rounded-pill ms-2" src={require('../../assets/logo.jpg')}></img>
                        <img className="dese-logotext mt-2" src={require('../../assets/text.png')}></img>
                        <button className="dese-adminnav-close-btn d-md-none d-block btn close-btn px-1 py-0 text-white"><i className="fa-solid fa-bars me-2"></i></button>
                    </div>

                    <ul className="list-unstyled px-2">
                        <li className=""><a href="/admin" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-house me-2"></i>Dashboard</a></li>
                        <li className="active"><a href="/userlist" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-users me-2"></i>List of Users</a></li>
                        <li className=""><a href="/stocklist" className="text-decoration-none px-3 py-2 d-flex justify-content-between">
                            <span><i className="fa-solid fa-boxes-stacked me-2"></i>Stock List</span>
                            <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
                        </a>
                        </li>
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-basket-shopping me-2"></i>Order List</a></li>
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i class="fa-solid fa-money-check-dollar me-2"></i>Inventory Analysis</a></li>
                    </ul>

                    <div>
                        <hr className="text-white mt-2" />
                        <div className="nav-item px-4">
                            <a href="/" className="dese-admin-nav-logout text-decoration-none dese-admin-nav-logout">
                                <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="dese-adminnav-content content">
                    <main className="container-fluid ">
                        <div className="mt-2">
                            <div className="p-3">
                                <h1 className="dese_title container-fluid text-start fs-2 fw-bold">LIST OF USERS</h1>
                                <hr />

                                <div className="container-fluid">
                                    <UserFunction />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        </>
    );
}

export default UserPage;