import React, { useState, useEffect } from 'react';
import { setMenus, getStock } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import './StockListItem.css';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';

function StockListItem() {
    const menus = useSelector((state) => state.allMenus.menus)

    const [imageUrl, setImageUrl] = useState('')
    const [menu_name, setMenu_name] = useState('');
    const [menu_price, setMenu_price] = useState('');
    const [menu_quantity, setMenu_quantity] = useState('');
    const singleMenu = useSelector((state) => state.getStock)

    const dispatch = useDispatch();

    const editMenu = (index) => {
        //Update the previous selection
        const newMenu = [...menus];

        let idn = newMenu.findIndex((menu) => menu.menu_isEdit == 1)

        if (idn != -1) {
            const updateMenu = newMenu.at(idn);
            updateMenu.menu_isEdit = 0;
            newMenu.splice(idn, 1, updateMenu);
        }

        const menu = newMenu.at(index);
        menu.menu_isEdit = 1;
        dispatch(getStock(menu));
        newMenu.splice(index, 1, menu);
        dispatch(setMenus(newMenu));
    }

    const updateMenu = (e) => {
        e.preventDefault();
        const newMenu = [...menus];
        let idn = newMenu.findIndex((menu) => menu.menu_isEdit == 1);
        console.log(idn);

        if (idn != -1) {
            const data_update = {
                menu_name: menu_name,
                menu_price: menu_price,
                menu_quantity: menu_quantity,
            }
            const updateMenu = newMenu.at(idn);

            http.put(`menus/${updateMenu.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess(result.data.message);

                    updateMenu.menu_name = menu_name;
                    updateMenu.menu_price = menu_price;
                    updateMenu.menu_quantity = menu_quantity;
                    updateMenu.menu_isEdit = 0;

                    newMenu.splice(idn, 1, updateMenu);
                    dispatch(setMenus(newMenu));

                    const singleMen = {
                        id: -2,
                        menu_name: null,
                        menu_price: null,
                        menu_quantity: null,
                        menu_isEdit: 0,
                        menu_isSold: 0,
                    };

                    dispatch(getStock(singleMen));
                    setMenu_name('');
                    setMenu_price('');
                    setMenu_quantity('');
                }
            }).catch(err => console.log(err.message));

        }
    }

    const notifySuccess = (message) => {
        toast.success(message, {
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

    const deleteStock = index => {
        const newStock = [...menus];
        console.log("Before Deletion", newStock);
        newStock.splice(index, 1);
        console.log("After Deletion", newStock);

        dispatch(setMenus(newStock));
    }

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);

    useEffect(() => {

        if (singleMenu.menu_name != null) {
            setMenu_name(singleMenu.menu_name);
            setMenu_price(singleMenu.menu_price);
            setMenu_quantity(singleMenu.menu_quantity);
        }

    }, [singleMenu]);

    return (
        <>
            {
                menus.length > 0 ?
                    menus.map((menus, index) => {
                        return (
                            <div className="llanesk-stocklistitem-card rounded-3 card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mx-5 mt-3 p-4">
                                <div className="mb-3">
                                    <img className="llanesk-stocklistitem-menu_pic" src={menus.menu_pic}></img>
                                </div>

                                <div>
                                    <h3 className="text-light fw-bold mb-2 text-center text-dark"> {menus.menu_name}</h3>

                                    <p className="llanesk-stocklistitem-title mb-4"></p>

                                    <p className="text-light fw-light mb-3 fs-5 text-dark"><span className="fw-normal">Price: </span>  ₱{menus.menu_price}</p>
                                    <p className="text-light fw-light mb-3 fs-5 text-dark"><span className="fw-normal">Quantity: </span>{menus.menu_quantity}</p>

                                </div>

                                <div className="d-flex text-center justify-content-around mb-0 mt-3">
                                    <button className="llanesk-stocklistitem-btn btn" onClick={() => editMenu(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas2" aria-controls="offcanvas"><i className="fa-regular fa-pen-to-square fs-4"></i></button>
                                    <button className="llanesk-stocklistitem-btn btn" onClick={() => deleteStock(index)} ><i className="fa-regular fa-trash-can fs-4"></i></button>


                                </div>

                                <div className="dese-offcanvas offcanvas text-bg-light" id="offcanvas2" tabIndex="-1">
                                    <div className="offcanvas-header mb-0">
                                        <h3 className="offcanvas-title fw-bolder text-dark">Update Meal</h3>
                                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body small p-3">

                                        <div className="container px-3">



                                            <form onSubmit={updateMenu}>

                                                <div className="mt-4 form-group">
                                                    <div className="text-center d-flex flex-row align-items-center col-12">

                                                        <label className="me-3 col-3 fw-bold">Menu Name</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            id="title"
                                                            value={menu_name}
                                                            onChange={(e) => setMenu_name(e.target.value)}
                                                            className="form-control"
                                                            placeholder="Menu Name"
                                                            required />
                                                    </div>
                                                </div>

                                                <div className="mt-4 form-group">
                                                    <div className="text-center d-flex flex-row align-items-center col-12">
                                                        <label className="me-3 col-3 fw-bold">Price</label>
                                                        <input
                                                            type="number"
                                                            name="stock_price"
                                                            id="stock_price"
                                                            value={menu_price}
                                                            onChange={(e) => setMenu_price(e.target.value)}
                                                            className="form-control"
                                                            placeholder="Price"
                                                            required />
                                                    </div>
                                                </div>

                                                <div className="mt-4 form-group">
                                                    <div className="text-center d-flex flex-row align-items-center col-12">
                                                        <label className="me-3 col-3 fw-bold">Quantity</label>
                                                        <input
                                                            type="number"
                                                            name="quantity"
                                                            id="quantity"
                                                            value={menu_quantity}
                                                            onChange={(e) => setMenu_quantity(e.target.value)}
                                                            className="form-control"
                                                            placeholder="Quantity"
                                                            required />
                                                    </div>
                                                </div>

                                                {/* <div className="mt-4 form-group">
                                                        <div className="text-center">
                                                            <input
                                                            type="text"
                                                            name="stock_status"
                                                            id="stock_status"
                                                            value={menu_price}
                                                            onChange={(e) => setMenu_price(e.target.value)}
                                                            className="form-control"
                                                            placeholder="Variation"
                                                            required />
                                                        </div>
                                                    </div> */}

                                                <div className="col-12 d-flex justify-content-center">

                                                    <input className="btn btn-success text-center rounded-pill mt-4" type="submit" value="Update Meal" />

                                                </div>
                                            </form>
                                        </div>
                                    </div >



                                </div>

                            </div >


                        )
                    })
                    :
                    <div className="spinner-border text-primary justify-content-center container-fluid" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

            }
        </>
    );
}

export default StockListItem;