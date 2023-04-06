import React from 'react';

function Admin() {
    return (
        <>
            <nav className="d-none d-md-block bg-light sidebar p-2">
                <div className='container-fluid mt-5 pt-5'>
                    <div className='m-2'>
                        <span className='brand-name fs-4'>Kanayon Inasal</span>
                    </div>
                    <hr className='text-dark' />
                    <div className='list-group list-group-flush'>
                        <a className='list-group-item py-2'>
                            <i class="fa-solid fa-users fs-5 me-3"></i>
                            <span >List of Users</span>
                        </a>
                        <a className='list-group-item py-2 '>
                            <i className='fa-solid fa-basket-shopping fs-5 me-3'></i>
                            <span >List of Orders</span>
                        </a>
                        <a className='list-group-item py-2'>
                            <i className='fa-solid fa-boxes-stacked fs-5 me-3'></i>
                            <span >Inventory Analysis</span>
                        </a>
                        <a className='list-group-item py-2'>
                            <i className='fa-solid fa-right-from-bracket fs-5 me-3'></i>
                            <span >Logout</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Admin;