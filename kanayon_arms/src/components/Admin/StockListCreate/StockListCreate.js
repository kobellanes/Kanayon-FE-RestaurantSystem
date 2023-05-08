import React, { useState, useEffect } from 'react';
import { setMenus, getStock } from '../../../redux/actions/actions';
import "./StockListCreate.css"
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

function StockListCreate() {
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch();
    const [menu_name, setMenu_name] = useState('');
    const [menu_price, setMenu_price] = useState('');
    const [menu_quantity, setMenu_quantity] = useState('');

    const menus = useSelector((state) => state.allMenus.menus)

    const setMenu_pic = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "y7oc0qur");

        Axios.post("https://api.cloudinary.com/v1_1/dkaekfiuz/image/upload", formData).then((res) => {
            console.log(res.data.url);
            setImageUrl(res.data.url);
        }).catch((err) => console.log(err.message));
    }


    const addMenu = (e) => {
        e.preventDefault();

        http.get('menus').then(result => {
            dispatch(setMenus(result.data));
            const newMenu = result.data;

            const menu = {
                menu_pic: imageUrl,
                menu_name: menu_name,
                menu_price: menu_price,
                menu_quantity: menu_quantity,
                menu_isEdit: "0",
                menu_isSold: "0",
            }

            http.post('menus', menu).then((result) => {

                let ind = newMenu.findIndex((menu) => menu.menu_name == menu_name);

                if (ind != -1) {
                    notifyError(result.data.message);
                    setMenu_name('');

                } else {

                    if (result.data.prompt == 1) {
                        notifySuccess(result.data.message);
                        newMenu.push(menu);

                        dispatch(setMenus(newMenu));
                        setMenu_name('');
                        setMenu_price('');
                        setMenu_quantity('');

                        http.get('menus').then(result => {
                            dispatch(setMenus(result.data));

                        }).catch(err => console.log(err.message));
                    }
                }

            });

        });

    }

    const notifyError = (message) => {
        toast.error(message, {
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="mt-md-3">
                        <div className="text-end me-3">
                            <button className="dese-btn-add btn btn-success btn-lg rounded-pill" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dese-offcanvas offcanvas text-bg-light" id="offcanvas" tabIndex="-1">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Add New Meal</h3>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0">

                    <h6 className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4">Placeholder</h6>

                    <div className="container px-4">

                        <form onSubmit={addMenu}>

                            <div className="form-group">

                                <div className="text-center d-flex align-items-center justify-content-start">

                                    <input
                                        type="file"
                                        className="form-control"
                                        id="fileupload"
                                        // value={menu_pic}
                                        onChange={(e) => { setMenu_pic(e.target.files) }}
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
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
                                <div className="text-center">
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
                                <div className="text-center">
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

                            <div className="col-12 d-flex justify-content-end">

                                <input className="btn btn-success text-center rounded-pill mt-4" type="submit" value="Add Meal" />

                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    );
}

export default StockListCreate;