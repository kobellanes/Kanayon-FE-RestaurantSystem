import React, { useState, useEffect } from 'react';
import { setOrders, setMenus, getMenu } from '../../../redux/actions/actions';
import http from '../../../http';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function CompletedFunction() {
    const orders = useSelector((state) => state.allOrders.orders);

    const dispatch = useDispatch();

    const fetchOrders = async () => {
        http.get('orders').then(result => {
            dispatch(setOrders(result.data));

        }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        fetchOrders();
    }, []);


    return (
        <>
            <table className="table table-striped table-hover mt-1">

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
                    </tr>
                </thead>

                <tbody>

                    {
                        orders.length > 0 ?

                            orders.map((orders, index) => {

                                return (
                                    <tr>

                                        {orders.isStatus == "COMPLETED ORDER" ?
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
                                                    <h3 className="text-start fs-6 fw-bold text-success">{orders.isStatus}</h3>
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

export default CompletedFunction;