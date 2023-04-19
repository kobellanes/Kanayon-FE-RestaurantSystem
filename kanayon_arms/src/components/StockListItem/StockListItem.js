import React, { useEffect } from 'react';
import { setStocks, getStock } from '../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function StockListItem() {
    const stocks = useSelector((state) => state.allStocks.stocks)
    const singleStock = useSelector((state) => state.getStock)

    const dispatch = useDispatch();

    const editStock = index => {
        //Update the previous selection
        const newStock = [...stocks];

        let idn = newStock.findIndex((stock) => stock.isEdit == 1)

        if (idn != -1) {
            const updateStock = newStock.at(idn);
            updateStock.isEdit = 0;
            newStock.splice(idn, 1, updateStock);
        }

        const stock = newStock.at(index);
        stock.isEdit = 1;
        dispatch(getStock(stock));
        newStock.splice(index, 1, stock);
        dispatch(setStocks(newStock));
    }

    const soldStock = index => {
        const newStock = [...stocks];
        const stock = newStock.at(index);

        stock.isSold = 1;
        newStock.splice(index, 1, stock);

        dispatch(setStocks(newStock));
    }

    const retrieveStock = index => {
        const newStock = [...stocks];
        const stock = newStock.at(index);

        stock.isSold = 0;
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
                            <div className="card card shadow col-xl-3 col-md-4 col-sm-6 d-flex justify-content-around mt-5 m-2 p-4">
                                {/* <div className="card border border-dark p-5 py-5">

                                </div> */}
                                <div className="w-100 ms-1">
                                    {
                                        stock.isSold == 1 ?
                                            <h3 className="text-start text-decoration-line-through text-white">{stock.stock_name}</h3>
                                            :
                                            <h3 className="text-start text-white">{stock.stock_name}</h3>
                                    }
                                    <p className="text-start text-dark text-white">{stock.stock_price}</p>
                                </div>

                                <div className="d-flex">
                                    {
                                        stock.isEdit == 0 ?
                                            <button className="btn btn-success ms-3" onClick={() => editStock(index)}>EDIT</button>
                                            :
                                            <button disabled className="btn btn-success ms-3" onClick={() => editStock(index)}>EDIT</button>
                                    }
                                    <button onClick={() => deleteStock(index)} className="btn btn-danger ms-5">DELETE</button>
                                </div>

                                {
                                    stock.isSold == 0 ?
                                        <button onClick={() => soldStock(index)} className="btn btn-dark mt-3">SOLD OUT</button>
                                        :
                                        <button onClick={() => retrieveStock(index)} className="btn btn-success mt-3">Retrieve</button>
                                }

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