import React, { useState, useEffect } from 'react';
import { setAccounts } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';
import './BannedUserFunction.css';


function BannedUserFunction() {
    const [retrievedPrompt, setRetrievedPrompt] = useState('');
    const [retrieveOrig, setRetrieveOrig] = useState('');

    const dispatch = useDispatch();

    const accounts = useSelector((state) => state.allAccounts.accounts);

    const retrievePrompt = (index) => {
        const newAccount = [...accounts];
        const retrieveAccount = newAccount.at(index);

        setRetrieveOrig(retrieveAccount);
        setRetrievedPrompt(retrieveAccount.isFirst + " " + retrieveAccount.isLast);

    }

    const retrievingAccount = (index) => {
        const newAccount = [...accounts];

        let idn = newAccount.findIndex((account) => account.id == retrieveOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "ACTIVE",
            }

            const updateAccount = newAccount.at(idn);

            http.put(`accounts/${updateAccount.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess("You successfully lift the ban of a user.");

                    updateAccount.isStatus = "ACTIVE";

                    newAccount.splice(idn, 1, updateAccount);
                    dispatch(setAccounts(newAccount));
                }
            }).catch(err => console.log(err.message));

        }

    }

    const notifySuccess = () => {
        toast.success("You successfully lift the ban of a user.", {
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

    const [delPrompt, setDelPrompt] = useState('');
    const [delOrig, setDelOrig] = useState('');

    const deletePrompt = (index) => {
        const newAccount = [...accounts];
        const deleteAccount = newAccount.at(index);

        setDelOrig(deleteAccount);
        setDelPrompt(deleteAccount.isFirst + " " + deleteAccount.isLast);

    }

    const deleteUser = (index) => {
        const newAccount = [...accounts];
        const deleteAccount = delOrig;

        http.delete('http://localhost/Database_Kanayon/Kanayon_be/kanayon-be/public/api/accounts/' + deleteAccount.id).then(result => {
            if (result.data.status == 1) {
                notifyError(result.data.message);

                newAccount.splice(index, delOrig);
                http.get('accounts').then(result => {
                    dispatch(setAccounts(result.data));
                }).catch(err => console.log(err.message));
            }

        }).catch(err => console.log(err.message));


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
            <table className="table table-striped mt-2">
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
                                            accounts.isStatus != "ADMIN" && accounts.isStatus != "ACTIVE" ?
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
                                                        <h3 className="text-start fs-6 text-danger fw-bold">{accounts.isStatus}</h3>
                                                    </td>

                                                    <td className="dese_function text-center align-items-center py-2">
                                                        <button onClick={() => retrievePrompt(index)} className="llanesk-activeuserfunction-ban btn text-dark p-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas5" aria-controls="offcanvas5">
                                                            <i className="fa-solid fa-people-pulling fs-5"></i>
                                                        </button>

                                                        <button onClick={() => deletePrompt(index)} className="llanesk-activeuserfunction-ban btn text-dark p-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas6" aria-controls="offcanvas6">
                                                            <i className="fa-regular fa-trash-can fs-5"></i>
                                                        </button>

                                                        <div className="llanesk-banneduserfunction-user-retrieve-offcanva offcanvas text-bg-light" id="offcanvas5" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                                                            <div className="offcanvas-header mb-1 py-0 mt-3">
                                                                <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                                                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                            </div>

                                                            <div className="offcanvas-body p-0 mt-1">

                                                                <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                                                                <div className="container ">

                                                                    <div className="container">

                                                                        <div className="llanesk-banneduserfunction-container-start container p-3 rounded-2">
                                                                            <p className="text-start m-0">Are you sure you want to retrieve the user "{retrievedPrompt}"?</p>

                                                                        </div>

                                                                        <h6 className="text-start mt-3 ms-2 text-secondary fw-light">Note: You should only lift users who will follow Kanayon community standards.</h6>

                                                                    </div>
                                                                </div>

                                                                <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                                                                <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                                                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                                                                    <button onClick={() => retrievingAccount(index)} type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-success rounded-1 llanesk-activeuserfunction-banbutt fw-normal">Retrieve</button>


                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="llanesk-banneduserfunction-account-delete-offcanva offcanvas text-bg-light" id="offcanvas6" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                                                            <div className="offcanvas-header mb-1 py-0 mt-3">
                                                                <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                                                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                            </div>

                                                            <div className="offcanvas-body p-0 mt-1">

                                                                <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                                                                <div className="container ">

                                                                    <div className="container">

                                                                        <div className="llanesk-activeuserfunction-container-start container p-3 rounded-2">
                                                                            <p className="text-start m-0">Are you sure you want to delete the account named "{delPrompt}"?</p>

                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                                                                <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                                                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                                                                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => deleteUser(index)} className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt">Delete</button>

                                                                </div>
                                                            </div>

                                                        </div>
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



        </>
    );
}

export default BannedUserFunction;