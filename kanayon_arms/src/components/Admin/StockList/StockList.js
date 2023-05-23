import React, { useEffect } from 'react';
import "../StockList/StockList.css"
import StockListCreate from '../StockListCreate/StockListCreate';
import StockListItem from '../StockListItem/StockListItem';
import http from '../../../http';
import { useState } from 'react';
import { setAccounts } from '../../../redux/actions/actions';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function StockList() {
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');

    const navigate = useNavigate();

    const fetchAccount = async () => {
        http.get('accounts').then(result => {
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {
                navigate("/login");
            } else if (filter[0].isStatus === "ADMIN") {
                setData(filter[0].isStatus);
            } else {
                navigate("/login");
            }

        });
    };

    useEffect(() => {
        fetchAccount();

    }, []);

    const logout = (e) => {
        localStorage.clear();

        navigate("/");
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
                                    <li className=""><Link to="/admin" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-house me-2"></i>Dashboard</Link></li>

                                    <li className=" nav-item dropdown">
                                        <Link className="nav-link px-3 py-2 d-block" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="fa-solid fa-users me-1"></i>
                                            List of Users
                                            <i className="dropdown-toggle ms-2"></i>
                                        </Link>

                                        <ul className="dropdown-menu w-100">
                                            <li><Link className="llanesk-userlist-dropdown-item dropdown-item text-dark" to="/activeuser"><i className="fa-solid fa-circle me-2"></i>Active Users</Link></li>
                                            <li><Link className="llanesk-userlist-dropdown-item dropdown-item text-dark" to="/banneduser"><i className="fa-solid fa-ban me-2"></i>Banned Users</Link></li>
                                        </ul>
                                    </li>

                                    <li className="active"><Link to="/stocklist" className="text-decoration-none px-3 py-2 d-block justify-content-between"><i className="fa-solid fa-boxes-stacked me-2"></i>Stock List</Link></li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link px-3 py-2 d-block" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-basket-shopping me-2"></i>
                                            Order List
                                            <i className="dropdown-toggle ms-2"></i>
                                        </Link>

                                        <ul className="dropdown-menu w-100">
                                            <li><Link className="llanesk-userlist-dropdown-item dropdown-item text-dark" to="/orderlist"><i className="fa-solid fa-pen me-2"></i>Pending Orders</Link></li>
                                            <li><Link className="llanesk-userlist-dropdown-item dropdown-item text-dark" to="/receive"><i className="fa-brands fa-google-pay me-2"></i>Paid Orders</Link></li>
                                            <li><Link className="llanesk-userlist-dropdown-item dropdown-item text-dark" to="/completed"><i className="fa-solid fa-check me-2"></i>Completed Orders</Link></li>
                                        </ul>
                                    </li>

                                    <li className=""><Link to="/inventory" className="text-decoration-none px-3 py-2 d-block"><i className="fa-solid fa-money-check-dollar me-2"></i>Inventory Report</Link></li>

                                    <hr className="text-white mt-2" />

                                    <li className="">
                                        {/*  */}
                                        <Link to="/acc-settings" className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-unlock fs-5 me-2"></i>Change Password
                                        </Link>
                                    </li>

                                    <li className="">

                                        <Link to="/" onClick={logout} className="text-decoration-none px-3 py-2 d-block">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-2"></i>Logout
                                        </Link>

                                    </li>

                                </ul>

                            </div>

                            <div className="dese-adminnav-content content">
                                <main>
                                    <div className="container mt-4">
                                        <h1 className="text-center pt-4">List of Menu</h1>

                                        <div className="llanesk-stocklist-container container-fluid col-12 card border border-2 py-4 my-4">

                                            <StockListCreate />
                                            <div className="dese-stock row justify-content-center">

                                                <StockListItem />
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

export default StockList;