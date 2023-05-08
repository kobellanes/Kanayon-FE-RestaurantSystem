import React, { useEffect } from 'react';
import UserFunction from '../UserFunction/UserFunction';

function UserPage() {
    const user_id = localStorage.getItem("user_id");

    useEffect(() => {
        if (user_id == null) {
            window.location.href = '/login'
        } else {

        }
    }, []);

    const logout = (e) => {
        localStorage.clear();

        window.location.href = '/'
    }

    return (
        <>
            <div className="dese-adminnav-main main-container d-flex">
                <div className="dese-adminnav-sidebar sidebar" id="side_nav">
                    <div className="dese-adminnav-header-box header-box px-2 pt-3 pb-4 d-flex flex-row align-items-center">
                        <img className="dese-adminnav-logo rounded-pill ms-2" src={require('../../../assets/logo.jpg')}></img>
                        <h5 className="text-light mt-2 ms-2 fw-light">Hello Admin!</h5>

                    </div>

                    <ul className="list-unstyled px-2">
                        <li className=""><a href="/admin" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-house me-2"></i>Dashboard</a></li>
                        <li className="active"><a href="/userlist" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-users me-2"></i>List of Users</a></li>
                        <li className=""><a href="/stocklist" className="text-decoration-none px-3 py-2 d-block justify-content-between"><i className="fa-solid fa-boxes-stacked me-2"></i>Stock List</a></li>
                        <li className=""><a href="orderlist" className="text-decoration-none px-3 py-2  d-flex justify-content-between">
                            <span><i className="fa-solid fa-basket-shopping me-2"></i>Order List</span>
                            <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
                        </a>
                        </li>
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-money-check-dollar me-2"></i>Inventory Report</a></li>
                    </ul>

                    <div>
                        <hr className="text-white mt-2" />

                        <ul className="list-unstyled nav-item px-4">
                            <li>
                                <a href="/" onClick={logout} className=" text-decoration-none ">
                                    <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>
                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="dese-adminnav-content content">
                    <main className="container">
                        <div className="mt-2">
                            <div className="p-3">
                                <h1 className="dese_title text-dark container-fluid text-center mt-4">List of Users</h1>
                                <div className="llanesk-stocklist-border mt-3" />

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