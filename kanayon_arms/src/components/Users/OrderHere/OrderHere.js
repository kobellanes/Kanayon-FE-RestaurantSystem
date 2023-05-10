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

    const [menu_pic, setMenu_pic] = useState('');
    const [menu_name, setMenu_name] = useState('');
    const [menu_description, setMenu_description] = useState('');
    const [menu_price, setMenu_price] = useState('');

    const [orderOrig, setOrderOrig] = useState('');


    const [numberOrder, setNumberOrder] = useState('');
    const [finalNumber, setFinalNumber] = useState('');
    const [newOrders, setNewOrders] = useState('');
    const [oldOrders, setOldOrders] = useState('');

    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('0');

    const [orderPrompt, setOrderPrompt] = useState("No Orders");
    const [pricePrompt, setPricePrompt] = useState('');

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

    const addProduct = (e) => {
        e.preventDefault();
        const newMenu = [...menus];

        let idn = newMenu.findIndex((men) => men.id == orderOrig.id);

        const addOrder = menus.at(idn);

        // const regEx = ['\n'];
        // let textValue = stringToReplace.replace(/\\n/g,'\n');

        const a = numberOrder + "x" + " " + addOrder.menu_name + ",";

        setNumberOrder('');

        // setFinalNumber(numberOrder + "x");

        setNewOrders(oldOrders + " " + a);
        setOldOrders(oldOrders + " " + a);
        setOrderPrompt("Orders:");



        //TOTAL PRICE 
        setPricePrompt("Total Price: ₱")

        const b = parseInt(addOrder.menu_price);
        const c = parseInt(numberOrder);
        const d = b * c;

        const f = parseInt(oldPrice) + d;

        setNewPrice(f);

        setOldPrice(f);


        // const b = parseInt(addOrder.menu_price);
        // const d = parseInt(numberOrder);
        // const f = b * d;

        // const c = parseInt(oldPrice) + f;

        // setNewPrice(c);

        // setOldPrice(c);




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

                                                <button type="button" className="btn-close btn-close-dark px-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

                                            <form onSubmit={addProduct} className="px-4">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Number of Orders"
                                                    value={numberOrder} onChange={(e) => setNumberOrder(e.target.value)}
                                                    required>

                                                </input>

                                                <h6 className="pb-4 text-start border-bottom text-light fw-light"></h6>

                                                <div className="d-flex flex-row align-items-center justify-content-between pt-1 pb-3">

                                                    <div className="LucidoML-orderhere-text-title container-fluid m-0">
                                                        <p className="text-success m-0">₱{menu_price}</p>
                                                    </div>

                                                    <button data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-light text-dark px-0 mx-2 container-fluid">
                                                        Cancel
                                                    </button>

                                                    <input type="submit" className="btn btn-success text-light px-0 mx-2 container-fluid" value="Add to order">

                                                    </input>

                                                </div>

                                            </form>

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

            <div className="llanesk-orderhere-pay-offcanvas offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvas8" aria-labelledby="offcanvas8" data-bs-scroll="true">

                <div className="offcanvas-header p-0 mt-3 mx-4">
                    <h3 className="offcanvas-title" id="offcanvas8">Payment</h3>

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <h6 className="px-4 text-start border-bottom text-light fw-light pb-2 mb-4">Placeholder!</h6>

                    <div className="px-4 flex-flex-column">
                        <p>{orderPrompt}</p>
                        <p>{finalNumber}{newOrders}</p>

                        <br></br>
                        <p className="fw-bold">{pricePrompt}{newPrice}</p>

                    </div>

                </div>

                <div className="border-bottom text-light mb-3"></div>

                <div className="px-4 container">
                    <h6 className="fw-light">
                        Note: Placeholder!
                    </h6>
                </div>

                <div className="container p-3 px-4 col-12 d-flex flex-row">
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
            </div >

            <Footer>
            </Footer>

        </>

    );
}

export default OrderHere;   