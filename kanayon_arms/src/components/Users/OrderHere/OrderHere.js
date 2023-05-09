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

    var a = "";

    const [menu_pic, setMenu_pic] = useState('');
    const [menu_name, setMenu_name] = useState('');
    const [menu_description, setMenu_description] = useState('');
    const [menu_price, setMenu_price] = useState('');

    const [orderOrig, setOrderOrig] = useState('');

    const [newOrders, setNewOrders] = useState('');
    const [oldOrders, setOldOrders] = useState('\n');

    const [orderPrompt, setOrderPrompt] = useState("No Orders");

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);

    const confirmOrder = (index) => {
        //Update the previous selection
        const newMenu = [...menus];
        const menu = newMenu.at(index);

        setOrderOrig(menu);

        setMenu_pic(menu.menu_pic);
        setMenu_name(menu.menu_name)
        setMenu_description(menu.menu_description);
        setMenu_price(menu.menu_price);
    }

    const addProduct = (index) => {
        const newMenu = [...menus];

        let idn = newMenu.findIndex((men) => men.id == orderOrig.id);

        const addOrder = menus.at(idn);

        var a = addOrder.menu_name;

        setNewOrders(a + " " + oldOrders);

        setOldOrders(oldOrders + " " + a);

        setOrderPrompt("Orders:");

        if (idn != -1) {



        }


    }




    return (
        <>
            <Header>
            </Header>

            <div className="d-flex flex-column container-fluid justify-content-center align-items-center">
                <h4 className="LucidoML-orderhere-title fw-light mt-5 pb-2">Kanayon Inasal Menu</h4>
                <div className="llanesk-orderhere-border mb-3 text-center"></div>
            </div>

            <div className="container-fluid text-center mt-2">
                <button className="btn btn-secondary px-3 fs-4 rounded-3 fw-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvas8" aria-controls="offcanvas8">
                    PAY ORDER
                    <i className="ms-2 fa-solid fa-receipt"></i>
                </button>

            </div>
            <div className="container mt-5">

                <div className="row row-cols-1 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-5">

                    {
                        menus.length > 0 ?
                            menus.map((menus, index) => {
                                return (
                                    <div className="col">

                                        <div type="button" onClick={() => confirmOrder(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas7" aria-controls="offcanvas7" className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">

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

                                                                <button onClick={() => confirmOrder(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas7" aria-controls="offcanvas7" className="LucidoML_plus_btn btn text-light">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </button>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="llanesk-orderhere-confirmorder-offcanva offcanvas text-bg-light" id="offcanvas7" tabIndex="-1" data-bs-scroll="true">
                                            <div className="offcanvas-header mb-1 py-0 mt-3">
                                                <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm Order</h3>

                                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>

                                            <div className="offcanvas-body p-0">

                                                <h6 className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4 ms-1">Placeholder!</h6>

                                                <div className="container px-4">

                                                    <div className="container-fluid text-center">
                                                        <img className="llanesk-orderhere-pic-order rounded-3" src={menu_pic}></img>
                                                    </div>

                                                    <div className="container-fluid text-center mt-2">
                                                        <h3>{menu_name}</h3>

                                                        <p className="llanesk-stocklistitem-title mb-3"></p>

                                                        <h6 className='mt-2'>{menu_description}</h6>



                                                    </div>

                                                </div>

                                            </div>

                                            <div className="px-4 d-flex flex-row align-items-center justify-content-between pb-3">

                                                <div className="LucidoML-orderhere-text-title container-fluid m-0">
                                                    <p className="text-success m-0">₱{menu_price}</p>
                                                </div>

                                                <button data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-light text-dark px-0 mx-2 container-fluid">
                                                    Cancel
                                                </button>

                                                <button onClick={() => addProduct(index)} data-bs-dismiss="offcanvas" className="btn btn-success text-light px-0 mx-2 container-fluid">
                                                    Add to Order
                                                </button>



                                            </div>

                                        </div>


                                    </div>


                                )
                            })

                            :
                            <div className="spinner-border justify-content-center container-fluid text-light mt-4   " role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }



                </div>

            </div>

            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvas8" aria-labelledby="offcanvas8" data-bs-scroll="true">

                <div className="offcanvas-header p-0 mt-3 mx-4">
                    <h3 className="offcanvas-title" id="offcanvas8">Payment</h3>

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <h6 className="px-4 text-start border-bottom text-light fw-light pb-2 mb-4">Placeholder!</h6>

                    <div className="px-4 flex-flex-column">
                        <p>{orderPrompt}</p>
                        <p>{newOrders}<br></br></p>
                    </div>

                </div>

                <div className="border-bottom text-light mb-3"></div>

                <div className="mb-5 pb-5 container">
                    <h6 className="fw-light">
                        Note: Placeholder!
                    </h6>
                </div>

                <div className="container my-3 col-12 d-flex flex-row">
                    <div className="col-5">
                        <button type="button" className="container-fluid btn btn-light">Cancel

                        </button>
                    </div>

                    <div className="col-2">

                    </div>

                    <div className="col-5">
                        <button type="button" className="container-fluid btn btn-primary">Pay Order
                            <i className="ms-2 fa-solid fa-handshake"></i>
                        </button>

                    </div>

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