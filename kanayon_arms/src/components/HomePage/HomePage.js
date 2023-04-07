import React from 'react';
import menu from '../../assets/menu.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Admin from '../Admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
    return (
        <>
            <Header>

            </Header>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="HomePage__img">
                            <img className="img-fluid" src={menu} width="800" alt="Chicken" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>FOOD FOR ALL MOODS</h5>
                            <p>We serve up style with every bite.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="HomePage__img">
                            <img className="img-fluid" src={menu} width="800" alt="Chicken" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>FOOD FOR ALL MOODS</h5>
                            <p>We serve up style with every bite.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="HomePage__img">
                            <img className="img-fluid" src={menu} width="800" alt="Chicken" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>FOOD FOR ALL MOODS</h5>
                            <p>We serve up style with every bite.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Footer></Footer>
        </>
    );
}

export default HomePage;