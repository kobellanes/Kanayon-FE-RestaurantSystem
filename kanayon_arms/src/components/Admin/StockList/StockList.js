import React, { useEffect } from 'react';
import "../StockList/StockList.css"
import StockListCreate from '../StockListCreate/StockListCreate';
import StockListItem from '../StockListItem/StockListItem';

function StockList() {
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

                        <li className=" nav-item dropdown">
                            <a className="nav-link px-3 py-2 d-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <i className="fa-solid fa-users me-1"></i>
                                List of Users
                                <i className="dropdown-toggle ms-2"></i>
                            </a>

                            <ul className="dropdown-menu w-100">
                                <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="/userlist"><i className="fa-solid fa-circle me-2"></i>Active Users</a></li>
                                <li><a className="llanesk-userlist-dropdown-item dropdown-item text-dark" href="#"><i className="fa-solid fa-ban me-2"></i>Banned Users</a></li>
                            </ul>
                        </li>

                        <li className="active"><a href="/stocklist" className="text-decoration-none px-3 py-2 d-block justify-content-between"><i className="fa-solid fa-boxes-stacked me-2"></i>Stock List</a></li>
                        <li className=""><a href="/orderlist" className="text-decoration-none px-3 py-2 d-flex justify-content-between">
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
                    <main>
                        <div className="container mt-4">
                            <h1 className="text-center pt-4">List of Menu</h1>
                            <div className="llanesk-stocklist-border mt-3" />
                            <div className="llanesk-stocklist-container container-fluid col-12 card border border-2 py-4 my-4">

                                <StockListCreate />
                                <div className="dese-stock row">

                                    <StockListItem />
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div >

        </>
    );
}

export default StockList;