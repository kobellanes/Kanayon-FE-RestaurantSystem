import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HomePage.css';
import slide1 from '../../assets/homeslide.jpg';

function HomePage() {
    return (
        <>
            <Header>

            </Header>

            <section id="home" className="austriak-bg d-flex align-items-center">
                <div className="py-11 bg-light-gradient border-bottom border-white border-5"></div>
                <div className="bg-holder overlay overlay-light"> </div>

                <img src={slide1}></img>

                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>WELCOME TO <span>KANAYON INASAL</span></h1>
                            <h2>Good food choices are good investments.</h2>

                            <div className="HomePage__btn">
                                <a href="about" className="btn btn-about">ABOUT US</a>

                            </div>
                        </div>


                    </div>

                </div>
            </section >


            <Footer></Footer>
        </>
    );
}


export default HomePage;