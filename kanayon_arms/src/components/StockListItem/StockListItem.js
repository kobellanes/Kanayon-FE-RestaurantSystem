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
                            <div className="col-12 d-flex justify-content-around mt-1">
                                <div className="w-100 ms-1">

                                    {
                                        stock.isSold == 1 ?
                                            <h3 className="text-start text-decoration-line-through">{stock.stock_name}</h3>
                                            :
                                            <h3 className="text-start ">{stock.stock_name}</h3>
                                    }
                                    <p className="text-start">{stock.stock_price}</p>
                                </div>
                                {
                                    stock.isEdit == 0 ?
                                        <button className="btn btn-success" onClick={() => editStock(index)}>EDIT</button>
                                        :
                                        <button disabled className="btn btn-success" onClick={() => editStock(index)}>EDIT</button>
                                }
                                <button onClick={() => deleteStock(index)} className="btn btn-danger mx-1">DELETE</button>


                                {
                                    stock.isSold == 0 ?
                                        <button onClick={() => soldStock(index)} className="btn btn-primary">COMPLETE</button>
                                        :
                                        <button disabled onClick={() => soldStock(index)} className="btn btn-primary">COMPLETE</button>
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