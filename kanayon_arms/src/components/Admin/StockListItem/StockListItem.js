import React, { useEffect } from 'react';
import { setStocks, getStock } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import './StockListItem.css';

function StockListItem() {
    const stocks = useSelector((state) => state.allStocks.stocks)
    const singleStock = useSelector((state) => state.getStock)

    const dispatch = useDispatch();

    const editStock = index => {
        //Update the previous selection
        const newStock = [...stocks];

        let idn = newStock.findIndex((stock) => stock.menu_isEdit == 1)

        if (idn != -1) {
            const updateStock = newStock.at(idn);
            updateStock.menu_isEdit = 0;
            newStock.splice(idn, 1, updateStock);
        }

        const stock = newStock.at(index);
        stock.menu_isEdit = 1;
        dispatch(getStock(stock));
        newStock.splice(index, 1, stock);
        dispatch(setStocks(newStock));
    }

    const deleteStock = index => {
        const newStock = [...stocks];
        console.log("Before Deletion", newStock);
        newStock.splice(index, 1);
        console.log("After Deletion", newStock);

        dispatch(setStocks(newStock));
    }

    useEffect(() => {

    }, [singleStock]);
    return (
        <>
            {
                stocks.length > 0 ?
                    stocks.map((stock, index) => {
                        return (
                            <div className="bg-black border-5 card card shadow col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mx-5 mt-3 p-4">
                                <div className="card border border-dark p-5 pb-5 mb-3">
                                    <img src={stock.menu_pic}></img>
                                </div>

                                <div className="">
                                    <h3 className="text-light fw-bold mb-3 text-center"> {stock.menu_name}</h3>
                                    <p className="text-light fw-light mb-3">Price: {stock.menu_price}</p>
                                    <p className="text-light fw-light mb-3">Quantity: {stock.menu_quantity}</p>

                                </div>

                                <div className="d-flex text-center justify-content-around mb-0 mt-4">
                                    {
                                        stock.menu_isEdit == 0 ?
                                            <>
                                                <button className="llanesk-stocklistitem-btn btn" onClick={() => editStock(index)}><i className="fa-regular fa-pen-to-square fs-5"></i></button>
                                                <button className="llanesk-stocklistitem-btn btn" onClick={() => deleteStock(index)} ><i className="fa-regular fa-trash-can fs-5"></i></button>
                                            </>
                                            :
                                            <>
                                                <button disabled className="llanesk-stocklistitem-btn btn text-light"><i className="fa-regular fa-pen-to-square fs-5"></i></button>
                                                <button disabled className="llanesk-stocklistitem-btn btn text-light" ><i className="fa-regular fa-trash-can fs-5"></i></button>
                                            </>
                                    }

                                </div>



                            </div>
                        )
                    })
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </>
    );
}

export default StockListItem;