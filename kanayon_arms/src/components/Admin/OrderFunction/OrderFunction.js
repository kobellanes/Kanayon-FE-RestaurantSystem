import React, { useEffect } from 'react';
import './OrderFunction.css';
import { setOrders } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function OrderFunction() {
    const orders = useSelector((state) => state.allOrders.orders)
    const singleOrder = useSelector((state) => state.getOrder)
    const dispatch = useDispatch();

    const orderFunc = () => {

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
                                <h3 className="text-start fs-6 fs-6 fw-light">{orders.user_name}</h3>
                            </td>

                            <td className="llanesk-orderfunc-numb">
                                <h3 className="text-start fs-6 fs-6 fw-light">{orders.gcash_num}</h3>
                            </td>

                            <td className="llanesk-orderfunc-order">
                                {orders.order_num == 1 ?
                                    <h3 className="text-start fs-6 fs-6 fw-light">Paa Inasal</h3>
                                    : orders.order_num == 2 ?
                                        <h3 className="text-start fs-6 fs-6 fw-light">Pecho Inasal</h3>
                                        :
                                        <h3 className="text-start fs-6 fs-6 fw-light">Liempo</h3>
                                }
                            </td>

                            <td className="llanesk-orderfunc-quant">
                                <h3 className="text-start fs-6 fs-6 fw-light">{orders.quantity}</h3>
                            </td>

                            <td className="llanesk-orderfunc-status">
                                {orders.isStatus == 0 ?
                                    <h3 className="text-start fs-6 fs-6 fw-light">Pending Order</h3>
                                    : orders.isStatus == 1 ?
                                        <h3 className="text-start fs-6 fs-6 fw-light">Processing Order</h3>
                                        :
                                        <h3 className="text-start fs-6 fs-6 fw-light">Confirm Order</h3>
                                }
                            </td>

                            <td className="text-center">
                                <button className="llanesk-orderfunc-button bg-success btn btn-success me-1" type="button"><i className="fa-solid fa-check"></i></button>
                                <button className="llanesk-orderfunc-button bg-danger btn btn-danger ms-1" type="button"><i className="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table >
        </>
    );
}

export default OrderFunction;