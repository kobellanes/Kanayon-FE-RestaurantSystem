import React, { useState, useEffect } from 'react';
import { setStocks, getStock } from '../../../redux/actions/actions';
import "./StockListCreate.css"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

function StockListCreate() {
    const dispatch = useDispatch();
    const [stockPic, setStockPic] = useState('');
    const [stockTitle, setStockTitle] = useState('');
    const [stockPrice, SetStockPrice] = useState('');
    const [stockQuantity, SetStockQuantity] = useState('');

    const singleStock = useSelector((state) => state.getStock)
    const stocks = useSelector((state) => state.allStocks.stocks)

    // const updateStock = () => {
    //     const newStock = [...stocks];
    //     let idn = newStock.findIndex((stock) => stock.isEdit == 1)

    //     if (idn != -1) {
    //         const updateStock = newStock.at(idn);
    //         updateStock.stock_name = stockTitle;
    //         updateStock.stock_price = stockPrice;
    //         updateStock.isEdit = 0;
    //         newStock.splice(idn, 1, updateStock);
    //         dispatch(setStocks(newStock));

    //         const single = {
    //             id: -2,
    //             stock_name: null,
    //             stock_price: null,
    //             stock_quantity: null,
    //             isEdit: 0,
    //             isComplete: 0,
    //         };
    //         dispatch(getStock(single));
    //         console.log(singleStock);
    //     }
    // }

    const addStock = (e) => {
        e.preventDefault();
        const newStock = [...stocks];
        const formData = new FormData;
        formData.append('image', stockPic);

        newStock.push({
            id: Math.floor(Math.random() * 20000),
            menu_pic: stockPic,
            menu_name: stockTitle,
            menu_price: stockPrice,
            menu_quantity: stockQuantity,
            menu_isEdit: 0,
            menu_isSold: 0,
        })

        console.log(setStocks(newStock));

        dispatch(setStocks(newStock));
        setStockPic('');
        setStockTitle('');
        SetStockPrice('');
        SetStockQuantity('');
    }

    const notifySuccess = () => {
        toast.success('You Successfully Added a Product!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    useEffect(() => {

        if (singleStock.stock_name != null) {
            setStockTitle(singleStock.stock_name);
            SetStockPrice(singleStock.stock_price);
            SetStockQuantity(singleStock.stock_quantity);
            console.log(singleStock);
        }

    }, [singleStock]);
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
                <div className="offcanvas-header mb-0">
                    <h3 className="offcanvas-title fw-bolder text-dark">Add New Meal</h3>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body small p-3">

                    <div className="container px-3">

                        <form onSubmit={addStock}>

                            <div className="mt-2 form-group">
                                <div className="text-center mt-2">
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder="Add Photo"
                                        value={stockPic}
                                        onChange={(e) => setStockPic(e.target.value)}
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
                                        value={stockTitle}
                                        onChange={(e) => setStockTitle(e.target.value)}
                                        className="form-control"
                                        placeholder="Menu Name"
                                        required />
                                </div>
                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input
                                        type="text"
                                        name="stock_price"
                                        id="stock_price"
                                        value={stockPrice}
                                        onChange={(e) => SetStockPrice(e.target.value)}
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
                                        value={stockQuantity}
                                        onChange={(e) => SetStockQuantity(e.target.value)}
                                        className="form-control"
                                        placeholder="Quantity"
                                        required />
                                </div>
                            </div>

                            <div className="col-12 mt-2 d-flex justify-content-center">

                                {
                                    singleStock.stock_name == null ?
                                        <input className="btn btn-success text-center rounded-pill mt-4" type="submit" value="Add Meal" />
                                        :
                                        ""
                                    // <button onClick={() => updateStock()} className="btn btn-success">UPDATE</button>
                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StockListCreate;