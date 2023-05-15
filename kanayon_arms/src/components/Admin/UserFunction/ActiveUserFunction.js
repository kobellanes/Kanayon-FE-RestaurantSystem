import React, { useState, useEffect } from 'react';
import '../UserFunction/ActiveUserFunction.css';
import { setAccounts } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';

function UserFunction() {

    const [bannedPrompt, setBannedPrompt] = useState('');
    const [banOrig, setBanOrig] = useState('');

    const dispatch = useDispatch();

    const accounts = useSelector((state) => state.allAccounts.accounts);

    const banPrompt = (index) => {
        const newAccount = [...accounts];
        const banAccount = newAccount.at(index);

        setBanOrig(banAccount);

        setBannedPrompt(banAccount.isFirst + " " + banAccount.isLast);

    }

    const banningAccount = () => {
        const newAccount = [...accounts];

        let idn = newAccount.findIndex((account) => account.id == banOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "BANNED",
            }

            const updateAccount = newAccount.at(idn);

            http.put(`accounts/${updateAccount.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifyWarn(result.data.message);

                    updateAccount.isStatus = "BANNED";

                    newAccount.splice(idn, 1, updateAccount);
                    dispatch(setAccounts(newAccount));
                }
            }).catch(err => console.log(err.message));

        }

    }

    const notifyWarn = (message) => {
        toast.warn(message, {
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

    const fetchAccounts = async () => {
        http.get('accounts').then(result => {
            dispatch(setAccounts(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchAccounts();
    }, []);


    return (
        <>
            <table className="table table-striped mt-3">
                <thead className="dese_thead">
                    <tr>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>EMAIL ADDRESS</th>
                        <th>GCASH NUMBER</th>
                        <th>Status</th>
                        <th className="text-center">ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        accounts.length > 0 ?
                            accounts.map((accounts, index) => {

                                return (
                                    <tr>
                                        {
                                            accounts.isStatus != "ADMIN" && accounts.isStatus != "BANNED" ?
                                                <>
                                                    <td className="py-3">
                                                        <h3 className="text-start fs-6 fw-light">{accounts.isFirst} {accounts.isLast}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-start fs-6 fw-normal">{accounts.isAddress}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-start fs-6 fw-normal">{accounts.isEmail}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-start fs-6 fw-normal">{accounts.isGcash}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="text-start fs-6 text-success fw-bold">{accounts.isStatus}</h3>
                                                    </td>

                                                    <td className="dese_function text-center align-items-center py-2">
                                                        <button onClick={() => banPrompt(index)} className="llanesk-activeuserfunction-ban btn text-dark p-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas4" aria-controls="offcanvas4"><i className="fa-solid fa-ban fs-5"></i></button>

                                                    </td>


                                                </>
                                                :
                                                ""

                                        }

                                    </tr>

                                )

                            })
                            :
                            <div className="mt-3 container-fluid spinner-border text-center justify-content-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }
                </tbody>
            </table >

            <div className="llanesk-activeuserfunction-user-ban-offcanva offcanvas text-bg-light" id="offcanvas4" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                    <div className="container ">

                        <div className="container">

                            <div className="llanesk-activeuserfunction-container-start container p-3 rounded-2">
                                <p className="text-start m-0">Are you sure you want to ban the user "{bannedPrompt}"?</p>

                            </div>

                            <h6 className="text-start mt-3 ms-2 text-secondary fw-light">Note: You should only restrict users that violates multiple Kanayon community standards.</h6>

                        </div>
                    </div>

                    <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                    <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                        <button onClick={banningAccount} type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt fw-normal">Ban User</button>


                    </div>
                </div>

            </div>

        </>
    );
}

export default UserFunction;