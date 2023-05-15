import React, { useState, useEffect } from 'react';
import { setOrders, setMenus, getMenu } from '../../../redux/actions/actions';
import http from '../../../http';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

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
            <p className="text-dark">

            </p>
            <table className="table table-striped table-hover mt-3">

                <thead className="dese_thead">

                    <tr>
                        <th className="text-wrap">Order Number</th>
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
                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.id}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isName}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isAddress}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isEmail}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isGcash}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.order_isList}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">₱{orders.order_isPrice}.00</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-light">{orders.order_isMethod}</h3>
                                                </td>

                                                <td className="p-0 py-3">
                                                    <h3 className="m-0 text-start fs-6 fw-bold text-danger">{orders.isStatus}</h3>
                                                </td>

                                                <td className="text-center align-items-center py-3 d-flex">
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


        </>
    );
}

export default ReceiveFunction;