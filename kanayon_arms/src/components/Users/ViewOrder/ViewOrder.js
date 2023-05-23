import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./ViewOrder.css"
import { setMenus, setOrders } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function ViewOrder() {
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');

    const [datech, setDatech] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const fetchAccount = async () => {
        http.get('accounts').then(result => {
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {
                navigate("/login");
            } else {
                setData(filter[0]);

                if ((filter[0].isStatus == "ACTIVE") || filter[0].isStatus == "ADMIN") {

                } else {
                    navigate("/login");
                }
            }

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchAccount();

    }, []);

    const orders = useSelector((state) => state.allOrders.orders);

    const fetchOrders = async () => {
        http.get('orders').then(result => {
            dispatch(setOrders(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchOrders();
    }, []);

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


    return (

        <>
            <Header>
            </Header>

            {
                data.isStatus == "ACTIVE" || data.isStatus == "ADMIN" ?
                    <>

                        <div className="d-flex flex-column container-fluid justify-content-center align-items-center">
                            <h4 className="LucidoML-orderhere-title fw-light mt-5 pb-2">Your Order/s</h4>
                            <div className="llanesk-orderhere-border mb-3 text-center"></div>
                        </div>

                        <div className="d-flex flex-column container-fluid justify-content-center align-items-center px-5">

                            <table className="table table-bordered mt-4 text-light">
                                <thead className="dese_thead">
                                    <tr className="fw-bolder fs-4">
                                        <th>Order Number</th>
                                        <th>Order List</th>
                                        <th>Total Price</th>
                                        <th>Mode</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders.length > 0 ?
                                            orders.map((orders, index) => {

                                                return (

                                                    <tr className="text-light">

                                                        {
                                                            orders.user_isEmail == data.isEmail && orders.date == datech ?
                                                                <>
                                                                    <td className="py-3">
                                                                        <h3 className="text-start fs-5 fw-light">{orders.id}</h3>
                                                                    </td>

                                                                    <td className="py-3">
                                                                        <h3 className="text-start fs-5 fw-light">{orders.order_isList}</h3>
                                                                    </td>

                                                                    <td className="py-3">
                                                                        <h3 className="text-start fs-5 fw-light">₱{orders.order_isPrice}.00</h3>
                                                                    </td>

                                                                    <td className="py-3">
                                                                        <h3 className="text-start fs-5 fw-light">{orders.order_isMethod}</h3>
                                                                    </td>

                                                                    <td className="py-3">
                                                                        <h3 className="text-start fs-5 fw-light">{orders.isStatus}</h3>
                                                                    </td>
                                                                </>
                                                                :
                                                                ""
                                                        }

                                                    </tr>

                                                )

                                            })

                                            :

                                            "No Orders"
                                    }

                                </tbody>

                            </table>
                        </div>
                        <Footer>
                        </Footer>
                    </>
                    :
                    ""
            }

        </>
    );
}

export default ViewOrder;