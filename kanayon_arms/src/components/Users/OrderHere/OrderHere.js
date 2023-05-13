import React, { useState, useEffect } from 'react';
import { setMenus, setOrders } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import "./OrderHere.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';

function OrderHere() {
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');

    const dispatch = useDispatch();

    const fetchAccount = async () => {
        http.get('accounts').then(result => {
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {
                window.location.href = '/login';
            } else {
                setData(filter[0]);

                if ((filter[0].isStatus == "ACTIVE") || filter[0].isStatus == "ADMIN") {

                } else {
                    window.location.href = '/login';
                }
            }


        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchAccount();

    }, []);

    const menus = useSelector((state) => state.allMenus.menus);

    const [menu_pic, setMenu_pic] = useState('');
    const [menu_name, setMenu_name] = useState('');
    const [menu_description, setMenu_description] = useState('');
    const [menu_price, setMenu_price] = useState('');

    const [orderOrig, setOrderOrig] = useState('');

    const [numberOrder, setNumberOrder] = useState('');

    const [newOrders, setNewOrders] = useState('');
    const [oldOrders, setOldOrders] = useState('');

    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('0');

    const [orderPrompt, setOrderPrompt] = useState("No order yet.");
    const [pricePrompt, setPricePrompt] = useState('');

    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [verifier, setVerifier] = useState('');
    const [verifier2, setVerifier2] = useState('');

    const [verifierPrompt, setVerifierPrompt] = useState("* Please choose mode: ");
    const [addressPrompt, setAddressPrompt] = useState('');
    const [lastNote, setLastNote] = useState('');

    const [finalPrice, setFinalPrice] = useState('Pay');

    const [getFinalPrice, setgetFinalPrice] = useState('');
    const [getMethod, setgetMethod] = useState('');

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

        //ADD ORDER
        setOrderPrompt("Your Order/s:");
        const a = numberOrder + "x—" + addOrder.menu_name;
        setNewOrders(oldOrders + " " + a);
        setOldOrders(a + "," + " " + oldOrders);

        //TOTAL PRICE 
        setPricePrompt("Total Price: ₱")
        const b = parseInt(addOrder.menu_price);
        const c = parseInt(numberOrder);
        const d = b * c;
        const f = parseInt(oldPrice) + d;
        setNewPrice(f + ".00");
        setOldPrice(f);

        setNumberOrder('');

        notifySuccess("");

        // const regEx = ['\n'];
        // let textValue = stringToReplace.replace(/\\n/g,'\n');

    }

    const handleChange = event => {
        if (event.target.checked) {
            setVerifier("CHECKED");
            setVerifierPrompt("Selected Mode:")
            setAddressPrompt("* Order would be prepared after paying! Hoping to see you here our dear ka-Nayon!");

            const j = parseInt(newPrice);
            setFinalPrice("Paid ₱" + j + ".00")

            setgetFinalPrice(j);
            setgetMethod("Dine in");
        }
    };

    const handleChange2 = event => {
        if (event.target.checked) {
            setVerifier2("CHECKED");
            setVerifierPrompt("Selected Mode:")
            setAddressPrompt("* We only deliver at Tanauan City, Batangas Area and also make sure the address that you use in the registration page is the address where you'll pick up the order! If not, kindly message us directly on our Facebook Page!");
            setLastNote("* We've also added a ₱50.00 for shipping fee! We'll be there in a momment ka-Nayon!");
            const h = parseInt(newPrice);
            const i = h + 50;

            setFinalPrice("Paid ₱" + i + ".00");

            setgetFinalPrice(i);
            setgetMethod("Delivery");
        }
    };

    const fixedFinalPrice = () => {
        setVerifier('');
        setVerifier2('');

        setVerifierPrompt("* Please choose mode: ");
        setAddressPrompt('');
        setLastNote('');

        setFinalPrice("Pay");
    }

    const confirmPayOrder = () => {
        if (verifierPrompt === "Selected Mode:") {

            http.get('orders').then(result => {
                dispatch(setOrders(result.data));
                const newOrder = result.data;

                const order = {
                    user_isName: data.isFirst + " " + data.isLast,
                    user_isAddress: data.isAddress,
                    user_isEmail: data.isEmail,
                    user_isGcash: data.isGcash,
                    order_isList: newOrders,
                    order_isMethod: getMethod,
                    order_isPrice: getFinalPrice,
                    order_isStatus: "PENDING ORDER"
                }

                http.post('orders', order).then((result) => {
                    if (result.data.prompt == 1) {
                        notifyCreated(result.data.message);
                        newOrder.push(order);

                        dispatch(setOrders(newOrder));

                        http.get('orders').then(result => {
                            dispatch(setOrders(result.data));
                            setNewPrice('');
                            setOldPrice('0');
                            setPricePrompt('')

                            setNewOrders('');
                            setOldOrders('');
                            setNumberOrder('');

                            setOrderPrompt("No order yet.");
                            setVerifier('');
                            setVerifier2('');

                            setVerifierPrompt("* Please choose mode: ");

                            setAddressPrompt('');
                            setLastNote('');

                            setFinalPrice("Pay");

                            setgetMethod('');
                            setgetFinalPrice('');

                        }).catch(err => console.log(err.message));
                    }

                }).catch(err => console.log(err.message));

            }).catch(err => console.log(err.message));


        } else if (verifierPrompt != "Selected Mode:") {
            setVerifierPrompt("* ERROR: PLEASE SELECT MODE!");
        }

    };

    const notifyCreated = (message) => {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const cancelOrder = () => {
        notifyDanger('');
        setNewPrice('');
        setOldPrice('0');
        setPricePrompt('')

        setNewOrders('');
        setOldOrders('');
        setNumberOrder('');

        setOrderPrompt("No order yet.");
        setVerifier('');
        setVerifier('');

        setCheckbox1('')
        setCheckbox2('');

        setVerifierPrompt("* Please choose mode: ");

        setAddressPrompt('');
        setLastNote('');

        setFinalPrice("Pay");

    };

    const notifyDanger = () => {
        toast.error("You cancelled an order.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifySuccess = () => {
        toast.success("You successfully added a meal to your payment list.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>

            {
                data.isStatus == "ACTIVE" || data.isStatus == "ADMIN" ?
                    <>
                        <Header>
                        </Header>

                        <div className="d-flex flex-column container-fluid justify-content-center align-items-center">
                            <h4 className="LucidoML-orderhere-title fw-light mt-5 pb-2">Kanayon Inasal Menu</h4>
                            <div className="llanesk-orderhere-border mb-3 text-center"></div>
                        </div>

                        <div className="container-fluid text-center mt-2">
                            <button className="btn btn-danger px-3 py-2 fs-4 rounded-3 fw-normal" data-bs-toggle="offcanvas" data-bs-target="#offcanvas8" aria-controls="offcanvas8">
                                SEE ORDER
                                <i className="ms-2 fa-solid fa-receipt"></i>
                            </button>

                        </div>
                        <div className="container mt-5">

                            <div className="row row-cols-1 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-5">

                                {
                                    menus.length > 0 ?
                                        menus.map((menus, index) => {

                                            return (
                                                <>

                                                    {
                                                        menus.menu_quantity != 0 ?
                                                            <>
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

                                                                                    <h6 className='mt-2'>{menu_description}</h6>

                                                                                </div>

                                                                            </div>

                                                                            <div className="px-4">
                                                                                <h6 className="mt-4 text-start border-bottom text-light fw-light"></h6>

                                                                                <form onSubmit={addProduct} className="mt-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        placeholder="Number of Orders"
                                                                                        min="1"
                                                                                        max="20"
                                                                                        value={numberOrder} onChange={(e) => setNumberOrder(e.target.value)}
                                                                                        required>
                                                                                    </input>

                                                                                    <h6 className="mt-4 text-start border-bottom text-light fw-light"></h6>

                                                                                    <div className="d-flex flex-row align-items-center justify-content-between mt-3 pb-3">

                                                                                        <div className="LucidoML-orderhere-text-title container-fluid m-0">
                                                                                            <p className="text-success m-0">₱{menu_price}</p>
                                                                                        </div>

                                                                                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-light text-dark px-0 mx-2 container-fluid">
                                                                                            Cancel
                                                                                        </button>

                                                                                        <input type="submit" className="btn btn-success text-light px-0 mx-2 container-fluid" value="Add to order">

                                                                                        </input>


                                                                                    </div>

                                                                                </form>

                                                                            </div>

                                                                        </div>



                                                                    </div>

                                                                </div>
                                                            </>
                                                            :
                                                            ""
                                                    }


                                                </>


                                            )
                                        })

                                        :
                                        <div className="d-flex spinner-border justify-content-center container-fluid text-light mt-4" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                }



                            </div>

                        </div >

                        <div className="llanesk-orderhere-pay-offcanvas offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvas8" aria-labelledby="offcanvas8" data-bs-scroll="true">

                            <div className="offcanvas-header p-0 mt-3 mx-4">
                                <h3 className="offcanvas-title" id="offcanvas8">Receipt</h3>

                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                            </div>

                            <div className="offcanvas-body p-0 mt-1">

                                <h6 className="px-4 text-start border-bottom text-light fw-light pb-2 mb-3">Placeholder!</h6>

                                <div className="px-4 flex-flex-column">

                                    <p className="m-0 fs-5">{orderPrompt}</p>

                                    <p className="fs-5 m-0 mt-2">{newOrders}</p>

                                </div>

                            </div>

                            {
                                orderPrompt == "Your Order/s:" ?
                                    <>
                                        <div className="d-flex flex-row p-0 m-0 mb-3 container-fluid align-items-center justify-content-center">
                                            <p className="fw-bold m-0 fs-4 d-flex">
                                                {pricePrompt}{newPrice}
                                            </p>
                                        </div>
                                    </>
                                    :
                                    ""
                            }

                            <div className="border-bottom text-light mb-3"></div>

                            <div className="px-4 container">
                                <h6 className="fw-light">
                                    Note: Placeholder!
                                </h6>
                            </div>

                            {
                                orderPrompt == "Your Order/s:" ?
                                    <div className="container p-3 px-4 col-12 d-flex flex-row">
                                        <div className="col-5">
                                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas10" aria-controls="offcanvas10" type="button" className="container-fluid btn btn-dark">
                                                Cancel order
                                            </button>
                                        </div>

                                        <div className="col-2">

                                        </div>

                                        <div className="col-5">
                                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas9" aria-controls="offcanvas9" type="button" className="container-fluid btn btn-primary">
                                                Pay order
                                                <i className="ms-2 fa-solid fa-handshake"></i>
                                            </button>

                                        </div>

                                    </div>
                                    :
                                    <div className="container p-3 px-4 col-12 d-flex flex-row">
                                        <div className="col-5">
                                            <button type="button" className="container-fluid btn btn-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                                                Cancel order
                                            </button>
                                        </div>

                                        <div className="col-2">

                                        </div>

                                        <div className="col-5">
                                            <button disabled type="button" className="container-fluid btn btn-primary">
                                                Pay order
                                                <i className="ms-2 fa-solid fa-handshake"></i>
                                            </button>

                                        </div>

                                    </div>
                            }

                        </div>

                        <div className="llanesk-orderhere-lastpayment-offcanva offcanvas text-bg-light" id="offcanvas9" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                            <div className="offcanvas-header mb-1 py-0 mt-3">
                                <h3 className="offcanvas-title fw-bolder text-dark px-2">Payment</h3>

                                <button onClick={fixedFinalPrice} type="button" className="btn-close btn-close-dark px-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body p-0">

                                <h6 className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-3">Placeholder!</h6>

                                <div className="container px-4 mt-4">

                                    {
                                        verifier == "CHECKED" ?
                                            <>
                                                <h6 className="text-dark text-center mb-3">{verifierPrompt}</h6>

                                                <div className="text-center m-0 d-flex flex-row justify-content-center pe-2 col-12">

                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="options"
                                                        id="option"
                                                        value={checkbox1}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        disabled />

                                                    <label className="btn btn-dark col-5 fw-bold" htmlFor="option">Dine in</label>

                                                </div>
                                            </>
                                            :
                                            verifier2 == "CHECKED" ?
                                                <>
                                                    <h6 className="text-dark text-center mb-3">{verifierPrompt}</h6>

                                                    <div className="text-center m-0 d-flex flex-row justify-content-center pe-2 col-12">

                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options"
                                                            id="option2"
                                                            autoComplete="off"
                                                            value={checkbox2}
                                                            onChange={handleChange2}
                                                            disabled
                                                        />

                                                        <label className="btn btn-dark col-5 fw-bold" htmlFor="option2">Delivery</label>

                                                    </div>
                                                </>
                                                :
                                                orderPrompt == "No order yet." ?
                                                    <>
                                                        <h6 className="text-dark text-center mb-3">No order yet.</h6>

                                                        <form>

                                                            <div className="text-center m-0 d-flex flex-row justify-content-center p-0 col-12">

                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="options"
                                                                    id="option"
                                                                    value={checkbox1}
                                                                    onChange={handleChange}
                                                                    autoComplete="off"
                                                                    disabled />

                                                                <label className="btn btn-dark col-5 fw-bold" htmlFor="option">Dine in</label>

                                                                <div className="col-1"></div>

                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="options"
                                                                    id="option2"
                                                                    autoComplete="off"
                                                                    value={checkbox2}
                                                                    onChange={handleChange2}
                                                                    disabled
                                                                />

                                                                <label className="btn btn-dark col-5 fw-bold" htmlFor="option2">Delivery</label>

                                                            </div>

                                                        </form>
                                                    </>
                                                    :
                                                    <>
                                                        <h6 className="text-danger text-center mb-3">{verifierPrompt}</h6>

                                                        <form>

                                                            <div className="text-center m-0 d-flex flex-row justify-content-center p-0 col-12">

                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="options"
                                                                    id="option"
                                                                    value={checkbox1}
                                                                    onChange={handleChange}
                                                                    autoComplete="off" />

                                                                <label className="btn btn-dark col-5 fw-bold" htmlFor="option">Dine in</label>

                                                                <div className="col-1"></div>

                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="options"
                                                                    id="option2"
                                                                    autoComplete="off"
                                                                    value={checkbox2}
                                                                    onChange={handleChange2}
                                                                />

                                                                <label className="btn btn-dark col-5 fw-bold" htmlFor="option2">Delivery</label>

                                                            </div>

                                                        </form>
                                                    </>


                                    }

                                    <div className="d-flex flex-column align-items-center justify-content-center text-center mt-4">

                                        <h6 className="text-danger fw-normal">{addressPrompt}</h6>
                                        <h6 className="text-danger fw-normal mt-4">{lastNote}</h6>

                                    </div>


                                </div>

                            </div>

                            <h6 className="mt-3 border-bottom"></h6>

                            <div className="container-fluid d-flex flex-row pb-3 px-3 mt-2">

                                <button onClick={fixedFinalPrice} className="btn btn-light col-5" data-bs-dismiss="offcanvas" aria-label="Close">Minimize</button>

                                <div className="col-2"></div>
                                {
                                    verifierPrompt === "Selected Mode:" ?
                                        <button className="btn btn-primary col-5 fw-light" onClick={confirmPayOrder}>{finalPrice}</button>
                                        :
                                        <button className="btn btn-primary col-5 fw-light" disabled>{finalPrice}</button>
                                }



                            </div>

                        </div >


                        <div className="llanesk-ordehere-cancel-order-offcanva offcanvas text-bg-light" id="offcanvas10" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                            <div className="offcanvas-header mb-1 py-0 mt-3">
                                <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body p-0 mt-1">

                                <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                                <div className="container ">

                                    <div className="container">

                                        <div className="llanesk-activeuserfunction-container-start container p-3 rounded-2">
                                            <p className="text-start m-0">Note: Are you sure you want to cancel your order/s? If you do this action, all of your orders will be cleared.</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                                <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Minimize</button>

                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" onClick={cancelOrder} className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt">Cancel Order</button>

                                </div>
                            </div>

                        </div>

                        <Footer>
                        </Footer>
                    </>
                    :
                    <div className="d-flex spinner-border justify-content-center container-fluid text-light mt-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }

        </>

    );
}

export default OrderHere;   