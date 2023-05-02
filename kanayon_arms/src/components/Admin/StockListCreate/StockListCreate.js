import React, { useState, useEffect } from 'react';
import { setStocks, getStock } from '../../../redux/actions/actions';
import "./StockListCreate.css"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

function StockListCreate() {
    const dispatch = useDispatch();
    const [stockTitle, setStockTitle] = useState('');
    const [stockPrice, SetStockPrice] = useState('');
    const singleStock = useSelector((state) => state.getStock)
    const stocks = useSelector((state) => state.allStocks.stocks)

    const updateStock = () => {
        const newStock = [...stocks];
        let idn = newStock.findIndex((stock) => stock.isEdit == 1)

        if (idn != -1) {
            const updateStock = newStock.at(idn);
            updateStock.stock_name = stockTitle;
            updateStock.stock_price = stockPrice;
            updateStock.isEdit = 0;
            newStock.splice(idn, 1, updateStock);
            dispatch(setStocks(newStock));

            const single = {
                id: -2,
                stock_name: null,
                stock_price: null,
                isEdit: 0,
                isComplete: 0,
            };
            dispatch(getStock(single));
            console.log(singleStock);
        }
    }

    const addStock = () => {
        const newStock = [...stocks];

        newStock.push({
            id: Math.floor(Math.random() * 20000),
            stock_name: stockTitle,
            stock_price: stockPrice,
            isEdit: 0,
            isSold: 0,
        })
        dispatch(setStocks(newStock));
        setStockTitle('');
        SetStockPrice('');
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
            console.log(singleStock);
        }

    }, [singleStock]);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="mt-md-3">
                        <div className="text-end">
                            <button className="dese-btn-add btn btn-success btn-lg rounded-pill"><a className="dese-menu fw-bold text-light text-decoration-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i class="fa-solid fa-plus"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dese-offcanvas offcanvas text-bg-light" id="offcanvas" tabindex="-1">
                <div className="offcanvas-header mb-0">
                    <h3 className="offcanvas-title fw-bolder text-dark">Add a Product</h3>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body small p-3">

                    <div className="container px-3">
                        <form className="form-signup">

                            <div className="mt-2 form-group">
                                <div className="text-center mt-2">
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder="Add Photo" />
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
                                        placeholder="Enter Meal" />
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
                                        placeholder="Enter Price" />
                                </div>
                            </div>

                            <div className="mt-4 form-group">
                                <div className="text-center">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Quantity" />
                                </div>
                            </div>

                            <div className="col-12 mt-2 d-flex justify-content-end">

                                {
                                    singleStock.stock_name == null ?
                                        <button onClick={() => addStock()} className="btn btn-success rounded-pill mt-4"><i class="fa-solid fa-plus"></i></button>
                                        :
                                        <button onClick={() => updateStock()} className="btn btn-success">UPDATE</button>
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