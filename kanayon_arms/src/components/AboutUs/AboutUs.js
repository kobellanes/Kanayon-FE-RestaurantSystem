import React from 'react';
import kanayon from '../../assets/logo.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AboutUs() {
    return (
        <>
            <Header></Header>
            <div className="AboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-25">

                            <h3>ABOUT US</h3>
                            <h1>KANAYON INASAL</h1>
                            <p>Our barrio's grilled chicken or alson known as chicken inasal wins the heart of every villager in our barangay, founded in September 10, 2022. Kanayon Inasal got its name from the term Kanayon which means "fellow local" that makes its name tattoed on the mind of every customer we serve. The idea came about when the founder, Tatay Mio felt the need and the urge to feed and inspire people with this dish they so loved, chicken inasal. His family put a lot of effort into serving the best and quality food they could offer. from selecting the freshest meat up to adding the special, flavorful and authentic ingredients make our inasal become different from the others. Kanayon inasal is perfect for the budget concious or what we called the budgetaian because of its cheap price for a complete dinnner or lunch. Our restaurant is a simple store with a simple dream that puts a lot of hardwork and determination that focuses its people and continues to grow vigorously.</p>

                            <div className="AboutUs__btn">
                                <a href="ordernow" className="btn btn-smart">ORDER NOW</a>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="AboutUs__img">
                                <img className="img-fluid" src={kanayon} width="800" alt="Kanayon" />


                            </div>




                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default AboutUs;