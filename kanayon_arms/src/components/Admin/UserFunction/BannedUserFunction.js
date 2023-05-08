import React, { useState, useEffect } from 'react';
import { setAccounts } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import { ToastContainer, toast } from 'react-toastify';


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

        console.log(idn);

        if (idn != -1) {
            const data_update = {
                isStatus: "ACTIVE",
            }

            const updateAccount = newAccount.at(idn);

            http.put(`accounts/${updateAccount.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess(result.data.message);

                    updateAccount.isStatus = "ACTIVE";

                    newAccount.splice(idn, 1, updateAccount);
                    dispatch(setAccounts(newAccount));
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



        </>
    );
}

export default BannedUserFunction;