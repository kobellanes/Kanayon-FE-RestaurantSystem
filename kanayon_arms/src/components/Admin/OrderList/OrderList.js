import React, { useEffect } from 'react';
import OrderFunction from '../OrderFunction/OrderFunction';
import { useState } from 'react';
import http from '../../../http';
import { setAccounts } from '../../../redux/actions/actions';

function OrderList() {
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
                                    <li className="active"><a href="/orderlist" className="text-decoration-none px-3 py-2 d-flex justify-content-between">
                                        <span><i className="fa-solid fa-basket-shopping me-2"></i>Order List</span>
                                        <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
                                    </a>
                                    </li>
                                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-money-check-dollar me-2"></i>Inventory Report</a></li>

                                    <hr className="text-white mt-2" />

                                    <li className="">
                                        <a href="/" onClick={logout} className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>Logout
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="dese-adminnav-content content">
                                <main className="container-fluid ">
                                    <div className="mt-2">
                                        <div className="p-3">
                                            <h1 className="dese_title text-dark container-fluid text-start fs-2 fw-bold">LIST OF ORDERS</h1>
                                            <hr />

                                            <div className="container-fluid">
                                                <OrderFunction></OrderFunction>
                                            </div>
                                        </div>
                                    </div>
                                </main>

                            </div>

                        </>
                        :
                        <div className="llanesk-admin-loading m-0 p-0 container-fluid">
                            <div className="d-flex spinner-border justify-content-center container-fluid text-dark mt-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div >
        </>
    );
}

export default OrderList;