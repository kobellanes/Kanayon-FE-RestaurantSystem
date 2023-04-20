import React, { useEffect } from 'react';
import './OrderFunction.css';
import { setOrders } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function OrderFunction() {
    const orders = useSelector((state) => state.allOrders.orders)
    const singleOrder = useSelector((state) => state.getOrder)
    const dispatch = useDispatch();

    const orderAccept = (index) => {
        const newOrder = [...orders];
        const order = newOrder.at(index);

        order.isStatus = 1;
        newOrder.splice(index, 1, order);

        dispatch(setOrders(newOrder));

    }

    const orderReject = (index) => {
        const newOrder = [...orders];
        const order = newOrder.at(index);

        order.isStatus = 3;
        newOrder.splice(index, 1, order);

        dispatch(setOrders(newOrder));

    }

    const orderConfirm = (index) => {
        const newOrder = [...orders];
        const order = newOrder.at(index);

        order.isStatus = 4;
        newOrder.splice(index, 1, order);

        dispatch(setOrders(newOrder));
    }

    const retrieveOrder = (index) => {
        const newOrder = [...orders];
        const order = newOrder.at(index);

        order.isStatus = 0;
        newOrder.splice(index, 1, order);

        dispatch(setOrders(newOrder));
    }

    const incompleteOrder = (index) => {
        const newOrder = [...orders];
        const order = newOrder.at(index);

        order.isStatus = 2;
        newOrder.splice(index, 1, order);

        dispatch(setOrders(newOrder));
    }

    useEffect(() => {

    }, [singleOrder]);

    return (
        <>
            <table className="table table-stripped">
                <thead className="dese_thead">
                    <tr>
                        <th>NAME</th>
                        <th>GCASH NUMBER</th>
                        <th>ORDER</th>
                        <th>QUANTITY</th>
                        <th>STATUS</th>
                        <th className="text-center">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orders, index) => (

                        <tr>
                            <td className="llanesk-orderfunc-name">
                                {orders.isStatus == 3 || orders.isStatus == 4 ?
                                    <h3 className="text-start fs-6 fs-6 text-decoration-line-through fw-light">{orders.user_name}</h3>
                                    :
                                    <h3 className="text-start fs-6 fs-6 fw-light">{orders.user_name}</h3>
                                }
                            </td>

                            <td className="llanesk-orderfunc-numb">
                                {orders.isStatus == 3 || orders.isStatus == 4 ?
                                    <h3 className="text-start fs-6 text-decoration-line-through fs-6 fw-light">{orders.gcash_num}</h3>
                                    :
                                    <h3 className="text-start fs-6 fs-6 fw-light">{orders.gcash_num}</h3>
                                }
                            </td>

                            <td className="llanesk-orderfunc-order">
                                {orders.isStatus == 3 || orders.isStatus == 4 && orders.order_num == 1 ?
                                    <h3 className="text-start text-decoration-line-through fs-6 fs-6 fw-light">Paa Inasal</h3>
                                    : orders.isStatus == 3 || orders.isStatus == 4 && orders.order_num == 2 ?
                                        <h3 className="text-start text-decoration-line-through fs-6 fs-6 fw-light">Pecho Inasal</h3>
                                        : orders.isStatus == 3 || orders.isStatus == 4 && orders.order_num == 3 ?
                                            <h3 className="text-start text-decoration-line-through fs-6 fs-6 fw-light">Liempo</h3>
                                            : orders.order_num == 1 ?
                                                <h3 className="text-start fs-6 fs-6 fw-light">Paa Inasal</h3>
                                                : orders.order_num == 2 ?
                                                    <h3 className="text-start fs-6 fs-6 fw-light">Pecho Inasal</h3>
                                                    :
                                                    <h3 className="text-start fs-6 fs-6 fw-light">Liempo</h3>

                                }
                            </td>

                            <td className="llanesk-orderfunc-quant">
                                {orders.isStatus == 3 || orders.isStatus == 4 ?
                                    <h3 className="text-start text-decoration-line-through fs-6 fs-6 fw-light">{orders.quantity}</h3>
                                    :
                                    <h3 className="text-start fs-6 fs-6 fw-light">{orders.quantity}</h3>
                                }
                            </td>

                            <td className="llanesk-orderfunc-status">
                                {orders.isStatus == 0 ?
                                    <h3 className="text-start fs-6 fs-6 fw-light">Pending Order</h3>
                                    : orders.isStatus == 1 ?
                                        <h3 className="text-start fs-6 fs-6 fw-light">Waiting for Payment</h3>
                                        : orders.isStatus == 2 ?
                                            <h3 className="text-start fs-6 fs-6 fw-light">Confirm Order</h3>
                                            : orders.isStatus == 3 ?
                                                <h3 className="text-start fs-6 fs-6 fw-light">Rejected</h3>
                                                :
                                                <h3 className="text-start fs-6 fs-6 fw-light">COMPLETED</h3>
                                }
                            </td>

                            <td className="text-center">
                                {orders.isStatus == 0 ?
                                    <>
                                        <button onClick={() => orderAccept(index)} className="llanesk-orderfunc-button bg-success btn btn-success me-1" type="button"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => orderReject(index)} className="llanesk-orderfunc-button bg-danger btn btn-danger ms-1" type="button"><i className="fa-solid fa-x"></i></button>
                                    </>
                                    : orders.isStatus == 1 ?
                                        <>
                                            <button disabled className="llanesk-orderfunc-button bg-success btn btn-success me-1" type="button"><i className="fa-solid fa-check"></i></button>
                                            <button disabled className="llanesk-orderfunc-button bg-danger btn btn-danger ms-1" type="button"><i className="fa-solid fa-x"></i></button>
                                        </>
                                        : orders.isStatus == 2 ?
                                            <>
                                                <button onClick={() => orderConfirm(index)} className="llanesk-orderfunc-button bg-dark btn btn-dark" type="button">ORDER COMPLETED</button>
                                            </>
                                            : orders.isStatus == 3 ?
                                                <>
                                                    <button onClick={() => retrieveOrder(index)} className="llanesk-orderfunc-button bg-info btn btn-info" type="button">Retrieve</button>
                                                </>
                                                :
                                                <button onClick={() => incompleteOrder(index)} className="llanesk-orderfunc-button bg-warning btn btn-warning" type="button">Incomplete Order</button>
                                }

                            </td>
                        </tr>
                    ))}
                </tbody>


            </table >
        </>
    );
}

export default OrderFunction;