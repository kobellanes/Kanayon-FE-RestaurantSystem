import React, { useState, useEffect } from 'react';
import { setMenus, getMenu } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import "./OrderHere.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import http from '../../../http';

function OrderHere() {
    const menus = useSelector((state) => state.allMenus.menus);
    const dispatch = useDispatch();

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);



    return (
        <>
            <Header>
            </Header>

            <div className="d-flex flex-column container-fluid justify-content-center align-items-center">
                <h4 className="LucidoML-orderhere-title fw-light mt-5 pb-2">Kanayon Inasal Menu</h4>
                <div className="llanesk-orderhere-border mb-3 text-center"></div>
            </div>
            <div className="container mt-5">

                <div className="row row-cols-1 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-5">

                    {
                        menus.length > 0 ?
                            menus.map((menus, index) => {
                                return (
                                    <div className="col">

                                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">

                                            <div className="row g-0">

                                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                                    <img src={menus.menu_pic} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="card-body mt-2">
                                                        <div className="container p-2 mb-4">
                                                            <h5 className="LucidoML-orderhere-card-title text-center">{menus.menu_name}</h5>

                                                            <p className="llanesk-stocklistitem-title mb-3"></p>

                                                            <p className="card-text text-center LucidoML-orderhere-card-description">
                                                                {menus.menu_description}
                                                            </p>

                                                        </div>

                                                        <div className="card-text m-0">

                                                            <div className="container-fluid d-flex flex-row align-items-center justify-content-between">

                                                                <p className="card-text LucidoML-orderhere-text-title text-success fw-normal m-0">
                                                                    ₱{menus.menu_price}

                                                                </p>

                                                                <button className="LucidoML_plus_btn btn text-light">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </button>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            })

                            :
                            <div className="spinner-border justify-content-center container-fluid text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }

                </div>

            </div>




            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/paa.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title">PAA INASAL</h5>
                                        <p className="card-text text-wrap">
                                            Paa Chicken Inasal with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱119</span>
                                        </p>
                                        <br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/barbeque.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">BARBEQUE</h5>
                                        <p className="card-text text-wrap">
                                            Barbeque with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱79</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/sisig.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">SISIG</h5>
                                        <p className="card-text text-wrap">
                                            Kanayon Sisig with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱119</span>
                                        </p>
                                        <br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="LucidoML-talong col-sm-6 col-md-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/talong.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">ENSALADANG TALONG</h5>
                                        <p className="LucidoML-des card-text text-wrap">
                                            Ensaladang talong pampagana meals</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱55</span>
                                        </p>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/halohalo.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">HALO-HALO</h5>
                                        <p className="card-text text-wrap">
                                            Extra creamy halo-halo with ice cream, leche flan and ube</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱45</span>
                                        </p>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/icetea.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">ICE TEA</h5>
                                        <p className="card-text text-wrap">
                                            1 Glass of ice tea</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱15</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/softdrinks.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">SOFTDRINKS</h5>
                                        <p className="card-text text-wrap">
                                            Any of your choice!</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱20</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i className="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i className="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}





            <Footer>
            </Footer>
        </>
    );
}

export default OrderHere;