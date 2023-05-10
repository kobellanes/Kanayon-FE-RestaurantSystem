import React, { useState, useEffect } from 'react';
import { setMenus, getMenu } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import './StockListItem.css';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';


function StockListItem() {
    const menus = useSelector((state) => state.allMenus.menus);

    //delete Prompt
    const [delPrompt, setDelPrompt] = useState('');
    const [delOrig, setDelOrig] = useState('');

    const [menu_pic, setMenu_pic] = useState('');
    const [menu_name, setMenu_name] = useState('');
    const [menu_description, setMenu_description] = useState('');
    const [menu_price, setMenu_price] = useState('');
    const [menu_quantity, setMenu_quantity] = useState('');

    //update
    const singleMenu = useSelector((state) => state.getMenu);

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

        setMenu_pic(menu.menu_pic);
        setMenu_name(menu.menu_name)
        setMenu_description(menu.menu_description);
        setMenu_price(menu.menu_price);
        setMenu_quantity(menu.menu_quantity);

        menu.menu_isEdit = 1;
        dispatch(getMenu(menu));
        newMenu.splice(index, 1, menu);
        dispatch(setMenus(newMenu));
    }

    const updateMenu = (e) => {
        e.preventDefault();
        const newMenu = [...menus];
        let idn = newMenu.findIndex((menu) => menu.menu_isEdit == 1);

        if (idn != -1) {
            const data_update = {
                menu_pic: menu_pic,
                menu_name: menu_name,
                menu_description: menu_description,
                menu_price: menu_price,
                menu_quantity: menu_quantity,
            }
            const updateMenu = newMenu.at(idn);

            http.put(`menus/${updateMenu.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess(result.data.message);

                    updateMenu.menu_name = menu_name;
                    updateMenu.menu_description = menu_description;
                    updateMenu.menu_price = menu_price;
                    updateMenu.menu_quantity = menu_quantity;
                    updateMenu.menu_isEdit = 0;

                    newMenu.splice(idn, 1, updateMenu);
                    dispatch(setMenus(newMenu));

                    const singleMen = {
                        id: -2,
                        menu_name: null,
                        menu_description: null,
                        menu_price: null,
                        menu_quantity: null,
                        menu_isEdit: 0,
                        menu_isSold: 0,
                    };

                    dispatch(getMenu(singleMen));
                    setMenu_name('');
                    setMenu_description('');
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

    const deletePrompt = (index) => {
        const newMenu = [...menus];
        const deleteMenu = newMenu.at(index);

        setDelOrig(deleteMenu);
        setDelPrompt(deleteMenu.menu_name);

    }

    const deleteMenu = (index) => {
        const newMenu = [...menus];
        const deleteMenu = delOrig;

        http.delete('http://localhost/Database_Kanayon/Kanayon_be/kanayon-be/public/api/menus/' + deleteMenu.id).then(result => {
            if (result.data.status == 1) {
                notifySuccess(result.data.message);

                newMenu.splice(index, delOrig);
                http.get('menus').then(result => {
                    dispatch(setMenus(result.data));
                }).catch(err => console.log(err.message));
            }

        }).catch(err => console.log(err.message));


    }

    //load list

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);

    //UPDATE

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
                            <div className="llanesk-stocklistitem-card rounded-3 card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mx-5 my-3 p-4">
                                <div className="mb-3">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvas2" aria-controls="offcanvas2" onClick={() => editMenu(index)} href=""><img className="llanesk-stocklistitem-menu_pic" src={menus.menu_pic}></img>
                                    </a>
                                </div>

                                <div>
                                    <h4 className="fw-bold mb-3 text-center text-dark"> {menus.menu_name}</h4>

                                    <h6 className="fw-normal mb-1 text-center text-dark"> {menus.menu_description}</h6>

                                    <p className="llanesk-stocklistitem-title mb-3"></p>

                                    <p className=" fw-light mb-3 fs-6 text-dark"><span className="fw-normal">Price: </span>  ₱{menus.menu_price}</p>
                                    <p className=" fw-light mb-3 fs-6 text-dark"><span className="fw-normal">Quantity: </span>{menus.menu_quantity}</p>

                                </div>

                                <div className="d-flex text-center justify-content-around mb-0 mt-2">
                                    <button className="llanesk-stocklistitem-btn btn" onClick={() => editMenu(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas2" aria-controls="offcanvas2">
                                        <i className="fa-regular fa-pen-to-square fs-4"></i>

                                    </button>

                                    <button className="llanesk-stocklistitem-btn btn" onClick={() => deletePrompt(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas3" aria-controls="offcanvas3">
                                        <i className="fa-regular fa-trash-can fs-4"></i>

                                    </button>


                                </div>

                                <div className="llanesk-stocklistitem-update-offcanva offcanvas text-bg-light" id="offcanvas2" tabIndex="-1" data-bs-scroll="true">
                                    <div className="offcanvas-header mb-1 py-0 mt-3">
                                        <h3 className="offcanvas-title fw-bolder text-dark px-2">Update Meal</h3>

                                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body p-0">

                                        <h6 className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4">Placeholder!</h6>


                                        <div className="container px-4">

                                            <div className="container-fluid text-center">
                                                <img className="llanesk-stocklistitem-picupdate w-75 rounded-3" src={menu_pic}></img>
                                            </div>

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

                                                        <label className="me-3 col-3 fw-bold">Description</label>
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            id="description"
                                                            value={menu_description}
                                                            onChange={(e) => setMenu_description(e.target.value)}
                                                            className="form-control"
                                                            placeholder="Menu Description"
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

                                                <div className="mt-4 col-12 d-flex justify-content-end">

                                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="rounded-pill btn btn-light mx-2">Cancel</button>

                                                    <input data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-success text-center rounded-pill" type="submit" value="Update Meal" />

                                                </div>
                                            </form>
                                        </div>
                                    </div >



                                </div>

                                <div className="llanesk-stocklist-item-delete-offcanva offcanvas text-bg-light" id="offcanvas3" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                                    <div className="offcanvas-header mb-1 py-0 mt-3">
                                        <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body p-0 mt-1">

                                        <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                                        <div className="container ">

                                            <div className="container">

                                                <div className="llanesk-stocklistitem-container-start container p-3 rounded-2">
                                                    <p className="text-start m-0">Are you sure you want to delete the meal "{delPrompt}"?</p>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                                        <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                                            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                                            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => deleteMenu(index)} className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt">Delete</button>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                    :
                    <div className="spinner-border justify-content-center container-fluid" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

            }
        </>
    );
}

export default StockListItem;