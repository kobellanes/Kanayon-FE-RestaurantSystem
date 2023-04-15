import React from 'react';

function Header() {
    return (
        <>
            <main className="main" id="top">

                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block backdrop shadow-transition"
                    data-navbar-on-scroll="data-navbar-on-scroll" style={{ backgroundColor: "rgba(255, 255,255, 0.75)" }}>

                    <div className="container"><a className="navbar-brand d-inline-flex" href="/">
                        <span className="text-1000 fs-0 fw-bold ms-2">Kanayon</span></a>

                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item px-2"><a className="nav-link fw-medium active" aria-current="page"
                                    href="/">Home</a></li>
                                <li className="nav-item px-2"><a className="nav-link fw-medium" href="/about">About Us</a></li>
                                <li className="nav-item px-2"><a className="nav-link fw-medium" href="/ordernow">Order Now</a></li>
                                <li className="nav-item px-2"><a className="nav-link fw-medium" href="/login">Login/Register</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </main>
        </>
    );
}

export default Header;