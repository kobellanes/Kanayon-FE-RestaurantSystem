import React from 'react';

function Admin() {
    return (
        <>
            <div className="container-fluid">
                <div className="row min-vh-100 m-0 flex-column flex-md-row">
                    <aside className="col-12 col-md-3 col-xl-2 p-0 m-0 bg-light">
                        <nav className="navbar navbar-expand-md navbar-light bd-dark flex-md-column flex-row align-items-center py-2 text-start sticky-top "
                            id="sidebar">
                            <div className="text-center p-3">
                                <a href="#" className="navbar-brand mx-0 font-weight-bold fs-3 text-nowrap">Kanayon Inasal</a>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                                <ul className="navbar-nav flex-column justify-content-center">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active py-3 mt-3">
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
                                        <a href="#" className="nav-link active py-3">
                                            <i className="fa-solid fa-right-from-bracket fs-5 me-3"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default Admin;