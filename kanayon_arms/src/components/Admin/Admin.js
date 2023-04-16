import React from 'react';
import AdminNavbar from '../AdminNavBar/AdminNavbar';

function Admin() {
    return (
        <>

            <div className="container-fluid bg-light d-flex py-3">
                <div className="hamburger ms-3">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="title text-dark ms-5">
                    Kanayon Inasal (Admin)
                </div>
            </div>

            <AdminNavbar></AdminNavbar>
            <h1 className="display-6">KAHUWEOUQHEIGQWEIQGEIQGEIGEQGWEGQ</h1>
        </>
    );
}

export default Admin;