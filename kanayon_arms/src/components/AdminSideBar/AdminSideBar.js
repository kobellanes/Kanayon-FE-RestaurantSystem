import React, { useState } from 'react';
import "./AdminSideBar.css"

function AdminSideBar() {

    const [dese_active, setActive] = useState(1);

    return (
        <>
            <div className="dese_side w-25 d-flex justify-content-between flex-column bg-dark text-white ps-3 pe-5 vh-100">
                <div>
                    <div className="mt-3">
                        <a href="" className="text-decoration-none text-light px-4">
                            <img src={require('../../assets/logo.jpg')} className="dese_custom-size rounded circle mx-1 me-2 mb-2 " alt="logo"></img>
                            <span className="fs-3">Kanayon Inasal</span>
                        </a>
                    </div>
                    <hr className="text-white mt-2" />

                    <ul className="nav nav-pills flex-column mt-3">
                        <li className={dese_active === 1 ? "dese_active nav-item p-2 fw-bold" : "nav-item p-2"}
                            onClick={e => setActive(1)}>
                            <a a href="" className="text-decoration-none text-light p-1">
                                <i className="fa-solid fa-users fs-5 me-3"></i>
                                <span>List of Users</span>
                            </a>
                        </li>
                        <li className={dese_active === 2 ? "dese_active nav-item p-2 fw-bold mt-2" : "nav-item p-2 mt-2"}
                            onClick={e => setActive(2)}>
                            <a href="" className="text-decoration-none text-light p-1">
                                <i className="fa-solid fa-basket-shopping fs-5 me-3"></i>
                                <span>List of Orders</span>
                            </a>
                        </li>
                        <li className={dese_active === 3 ? "dese_active nav-item p-2 fw-bold mt-2" : "nav-item p-2 mt-2"}
                            onClick={e => setActive(3)}>
                            <a href="" className="text-decoration-none text-light p-1">
                                <i className="fa-solid fa-boxes-stacked fs-5 me-3"></i>
                                <span>Inventory Analysis</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <hr className="text-white mt-2" />
                    <div className="nav-item p-2">
                        <a href="/" className="text-decoration-none text-light">
                            <i className="fa-solid fa-right-from-bracket fs-5 me-3"></i>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AdminSideBar;