import React from 'react';
import "./OrderNow.css"
function OrderNow() {
    return (
        <>
            <h1 class="fw-bold fs-2 fs-lg-6 lh-sm mb-3">Tuloy Ang Bange!</h1>
            <div class="card-group">
                <div class="card container">
                    <img src={require('../../assets/paa.jpg')} class="img-thumbnail h-100 card card-span h-100 text-white card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">PAA INASAL</h5>
                        <p class="card-text fs-5">₱ 89</p>
                        <p class="card-text">
                            <small class="text fs-6">solo</small></p>
                        <a href="select" class="btn btn-light">Select</a>
                    </div>
                </div>

                <div class="card container">
                    <img src={require('../../assets/pecho.jpg')} class="img-thumbnail h-100 card card-span h-100 text-white card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">PECHO INASAL</h5>
                        <p class="card-text fs-5">₱ 92</p>
                        <p class="card-text">
                            <small class="text fs-6">solo</small></p>
                        <a href="select" class="btn btn-light">Select</a>
                    </div>
                </div>

                <div class="card container">
                    <img src={require('../../assets/liempo.jpg')} class="img-thumbnail h-100 card card-span h-100 text-white card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">LIEMPO INASAL</h5>
                        <p class="card-text fs-5">₱ 89</p>
                        <p class="card-text">
                            <small class="text fs-6">solo</small></p>
                        <a href="select" class="btn btn-light">Select</a>
                    </div>
                </div>

                <div class="card">
                    <img src={require('../../assets/barbeque.jpg')} class="img-thumbnail h-100 card card-span h-100 text-white card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">PORK BBQ</h5>
                        <p class="card-text fs-5">₱ 25</p>
                        <p class="card-text">
                            <small class="text fs-6">solo</small></p>
                        <a href="select" class="btn btn-light">Select</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderNow;