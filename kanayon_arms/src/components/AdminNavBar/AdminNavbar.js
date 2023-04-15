import React, { useState } from 'react';
import "./AdminNavBar.css"
import UserPage from '../UserPage/UserPage';

function AdminNavbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <body className="mnq">
                <div className="main-container d-flex">
                    <div className="menu" onClick={toggleSidebar}>
                        <button type="button" className="btn btn-outline-dark">MENU</button>
                    </div>

                    {isSidebarOpen && (
                        <div className="sidebar">
                            <div className="header-box">
                                <a href="/admin" className="text-decoration-none d-block">
                                    <span className="bg-white text-dark rounded shadow px-2 me-2">Kanayon</span>
                                    <span className="text-white">Inasal</span>
                                </a>
                            </div>

                            <ul className="list-unstyled px-2">
                                <li className=""><a href="#" className="text-decoration-none d-block"><i className="fa-solid fa-house fs-5 me-3"></i>Dashboard</a></li>
                                <li className=""><a href="/userlist" className="text-decoration-none d-block"><i className="fa-solid fa-users fs-5 me-3"></i>List of Users</a></li>
                                <li className=""><a href="#" className="text-decoration-none d-block"><i className="fa-solid fa-basket-shopping fs-5 me-3"></i>List of Orders</a></li>
                                <li className=""><a href="#" className="text-decoration-none d-block"><i className="fa-solid fa-boxes-stacked fs-5 me-3"></i>Inventory Analysis</a></li>
                            </ul>

                            <hr className="h-color mx-3" />

                            <ul className="list-unstyled px-2">
                                <li className=""><a href="/" className="text-decoration-none d-block"><i className="fa-solid fa-right-from-bracket fs-5 me-3"></i>Log Out</a></li>
                            </ul>
                        </div>
                    )}
                    <div className="content">
                        <UserPage></UserPage>
                    </div>
                </div>
            </body >

            {/* <div className="container-fluid">
                <div className="row min-vh-100 m-0 flex-start flex-md-row">
                    <aside className="col-12 col-md-3 col-xl-2 p-0 m-0 bg-light">
                        <nav className="navbar navbar-expand-md navbar-light bd-dark flex-md-column flex-row align-items-center py-2 text-start sticky-top "
                            id="sidebar">
                            <div className="text-center p-3">
                                <a href="/admin" className="navbar-brand mx-0 font-weight-bold fs-3 text-nowrap">Kanayon Inasal</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                                <ul className="navbar-nav flex-column justify-content-center">
                                    <li className="nav-item">
                                        <a href="/userlist" className="nav-link active py-3 mt-3">
                                            <i className="fa-solid fa-users fs-5 me-3"></i>
                                            <span>List of Users</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active py-3">
                                            <i className="fa-solid fa-basket-shopping fs-5 me-3"></i>
                                            <span>List of Orders</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active py-3">
                                            <i className="fa-solid fa-boxes-stacked fs-5 me-3"></i>
                                            <span>Inventory Analysis</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link active py-3">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-3"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div> */}
        </>
    );
}

export default AdminNavbar;