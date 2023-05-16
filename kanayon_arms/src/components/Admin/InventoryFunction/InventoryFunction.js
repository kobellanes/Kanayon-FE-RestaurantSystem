import React, { useState, useEffect } from 'react';
import { setMenus, setOrders } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';

function InventoryFunction() {
    const menus = useSelector((state) => state.allMenus.menus);
    const dispatch = useDispatch();

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);


    return (
        <>
            <table className="table table-bordered table-striped table-hover mt-2">

                <thead className="dese_thead">

                    <tr className="text-center">
                        <th>MENU NAME</th>
                        <th>PRICE</th>
                        <th>SOLD</th>
                        <th>TOTAL PRICE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        menus.length > 0 ?

                            menus.map((menus, index) => {

                                return (
                                    <tr>
                                        {
                                            menus.menu_isSold > 0 ?
                                                <>
                                                    <td className="py-3">
                                                        <h3 className="text-center fs-6 fw-light">{menus.menu_name}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-center fs-6 fw-light">{menus.menu_price}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-center fs-6 fw-light">{menus.menu_isSold}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-center fs-6 fw-light">{menus.menu_price * menus.menu_isSold}</h3>
                                                    </td>
                                                </>
                                                :
                                                ""
                                        }
                                    </tr>

                                )

                            })

                            :
                            ""

                    }

                </tbody>
            </table>

        </>
    );
}

export default InventoryFunction;