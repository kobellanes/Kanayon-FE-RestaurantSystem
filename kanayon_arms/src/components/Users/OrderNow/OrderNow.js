import React from 'react';
import "./OrderNow.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function OrderNow() {
    return (
        <>
            <Header>

            </Header>

            <section className="llanesk-ordernow m-5 px-5 pb-4">

                <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center pt-2">
                    <h1 className="llanesk-ordernow-title fw-light pb-2 text-light">KANAYON INASAL MENU</h1>
                    <div className="llanesk-ordernow-border mb-3 text-center"></div>

                    <div className="d-flex flex-row mt-4 col-6 justify-content-center">
                        <a href="/orderhere" className="llanesk-ordernow-orderpage btn col-4 fw-light mx-xl-4 mx-3 fw-bold p-4" tabindex="-1" role="button" aria-disabled="true"><i class=""></i>ORDER HERE</a>
                        <a href="#" className="llanesk-ordernow-orderlist btn col-4 fw-light mx-xl-4 mx-3 fw-light p-4" tabindex="-1" role="button" aria-disabled="true"><i class=""></i>VIEW ORDER LIST</a>
                    </div>

                </div>

                <div className="mx-xl-5 px-xl-5 mt-4">
                    <div className="container-fluid d-flex mx-xl-5 px-xl-5">
                        <div className="container-fluid mx-xl-4 text-center text-xl-start">
                            <h4 className="llanesk-ordernow-featured fw-light text-light mt-4">Featured Items</h4>
                        </div>
                    </div>
                </div>

                <div className="mx-xl-5 px-xl-5">
                    <div className="mx-xl-5">
                        <div className="row g-4 mt-3 px-xl-5 mx-xl-5">
                            <div className="col-12 col-lg-6 col-xl-3">

                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/paa.jpg')} alt="Paa Inasal"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Paa Inasal</h4>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/liempo.jpg')} alt="Liempo"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Liempo</h4>
                                </div>

                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/barbeque.jpg')} alt="Pork Barbecue"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Pork Barbecue</h4>
                                </div>

                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/halohalo.jpg')} alt="Halo-Halo"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Halo-Halo</h4>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section >


            <Footer></Footer>
        </>
    );
}


export default OrderNow;