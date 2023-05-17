import React, { useState, useEffect } from 'react';
import { setOrders, setMenus, getMenu } from '../../../redux/actions/actions';
import http from '../../../http';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import './ReceiveFunction.css';

function ReceiveFunction() {
    const [datech, setDatech] = useState('');

    const fetchDate = async () => {
        const date = new Date();

        let day = date.getDate();

        if (day <= 9) {
            day = '0' + day;
        } else {
            day = date.getDate();
        }

        let month = date.getMonth() + 1;

        if (month <= 9) {
            month = '0' + month;
        } else {
            month = date.getMonth() + 1;
        }

        let year = date.getFullYear();

        let fullDate = `${year}-${month}-${day}`

        setDatech(fullDate);
    }
    useEffect(() => {
        fetchDate();
    }, []);

    const orders = useSelector((state) => state.allOrders.orders);

    const [confPrompt, setConfPrompt] = useState('');
    const [confOrig, setConfOrig] = useState('');

    const dispatch = useDispatch();

    const fetchOrders = async () => {
        http.get('orders').then(result => {
            dispatch(setOrders(result.data));

        }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const orderPrompt = (index) => {
        const newOrder = [...orders];
        const confOrder = newOrder.at(index);

        setConfOrig(confOrder);

        setConfPrompt(confOrder.user_isGcash);

    }

    const updateOrderStatus = () => {
        const newOrder = [...orders];

        let idn = newOrder.findIndex((order) => order.id == confOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "COMPLETED ORDER",
            }

            const updateOrder = newOrder.at(idn);

            http.put(`orders/${updateOrder.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess();

                    updateOrder.isStatus = "COMPLETED ORDER";

                    newOrder.splice(idn, 1, updateOrder);
                    dispatch(setOrders(newOrder));
                }
            }).catch(err => console.log(err.message));

        }

    }

    const goBackOrder = () => {
        const newOrder = [...orders];

        let idn = newOrder.findIndex((order) => order.id == confOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "PENDING ORDER",
            }

            const updateOrder = newOrder.at(idn);

            http.put(`orders/${updateOrder.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess();

                    updateOrder.isStatus = "PENDING ORDER";

                    newOrder.splice(idn, 1, updateOrder);
                    dispatch(setOrders(newOrder));
                }
            }).catch(err => console.log(err.message));

        }

    }


    const notifySuccess = () => {
        toast.success("You completed an order! Great Work!", {
            position: "top-right",
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
            <table className="table table-striped table-bordered table-hover mt-1">

                <thead className="dese_thead">

                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>EMAIL ADDRESS</th>
                        <th>GCASH NUMBER</th>
                        <th>ORDERS</th>
                        <th>PRICE</th>
                        <th>MODE</th>
                        <th>STATUS</th>
                        <th className="text-center">ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orders.length > 0 ?

                            orders.map((orders, index) => {

                                return (
                                    <tr>

                                        {orders.isStatus == "RECEIVED PAYMENT" && orders.date == datech ?
                                            <>
                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.id}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.user_isName}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.user_isAddress}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.user_isEmail}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.user_isGcash}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.order_isList}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">₱{orders.order_isPrice}.00</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-light">{orders.order_isMethod}</h3>
                                                </td>

                                                <td className="py-3">
                                                    <h3 className="text-start fs-6 fw-bold text-danger">{orders.isStatus}</h3>
                                                </td>

                                                <td className="text-center align-items-center py-4 d-flex">
                                                    <button onClick={() => orderPrompt(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas13" aria-controls="offcanvas13" type="button" className="btn btn-danger me-2">
                                                        <i className="fa-solid fa-arrow-left"></i>
                                                    </button>

                                                    <button onClick={() => orderPrompt(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas11" aria-controls="offcanvas14" type="button" className="btn btn-success ms-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                </td>
                                            </>
                                            :
                                            ""
                                        }

                                    </tr>
                                )

                            })
                            :
                            <div className="mt-3 container-fluid spinner-border text-center justify-content-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }

                </tbody>

            </table>

            <div className="llanesk-receivefunction-complete-offcanva offcanvas text-bg-light" id="offcanvas11" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                    <div className="container ">

                        <div className="container">

                            <div className="llanesk-banneduserfunction-container-start container p-3 rounded-2">
                                <p className="text-start m-0">Are you sure the order of want "{confPrompt}" is completed?</p>

                            </div>

                            <h6 className="text-start mt-3 ms-2 text-secondary fw-light">Note: This action cannot be undone.</h6>

                        </div>
                    </div>

                    <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                    <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                        <button onClick={updateOrderStatus} type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-success rounded-1 llanesk-activeuserfunction-banbutt fw-normal">Complete</button>

                    </div>
                </div>

            </div>

            <div className="llanesk-orderlistfunction-user-ban-offcanva offcanvas text-bg-light" id="offcanvas13" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                    <div className="container ">

                        <div className="container">

                            <div className="llanesk-activeuserfunction-container-start container p-3 rounded-2">
                                <p className="text-start m-0">Are you sure you want to make the order of "{confPrompt}" go back to pending orders? </p>

                            </div>

                            <h6 className="text-start mt-3 ms-2 text-secondary fw-light">Note: You should only make orders go back if you did not receive their payments.</h6>

                        </div>
                    </div>

                    <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                    <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                        <button type="button" onClick={goBackOrder} data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt fw-normal">Go Back</button>


                    </div>
                </div>

            </div>


        </>
    );
}

export default ReceiveFunction;