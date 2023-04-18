import React, { useState, useEffect } from 'react';
import { setStocks, getStock } from '../../redux/actions/actions';
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
            isComplete: 0,
        })
        dispatch(setStocks(newStock));
        setStockTitle('');
        SetStockPrice('');
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
                    <div className="col-12">
                        <h1>stock List</h1>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={stockTitle}
                                onChange={(e) => setStockTitle(e.target.value)}
                                className="form-control"
                                placeholder="Enter title" />
                        </div>
                    </div>
                    <div className="col-12 mt-1">
                        <div className="form-group">
                            <input
                                type="text"
                                name="stock_price"
                                id="stock_price"
                                value={stockPrice}
                                onChange={(e) => SetStockPrice(e.target.value)}
                                className="form-control"
                                placeholder="Enter price" />
                        </div>
                    </div>
                    <div className="col-12 mt-2 d-flex justify-content-end">

                        {
                            singleStock.stock_name == null ?
                                <button onClick={() => addStock()} className="btn btn-primary">ADD</button>
                                :
                                <button onClick={() => updateStock()} className="btn btn-success">UPDATE</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default StockListCreate;