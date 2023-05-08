import React, { useState, useEffect } from 'react';
import '../UserFunction/UserFunction.css';
import { setAccounts, setUsers } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import Axios from 'axios';

function UserFunction() {
    // const users = useSelector((state) => state.allUsers.users);
    // const singleUsers = useSelector((state) => state.getUser);

    const dispatch = useDispatch();

    const accounts = useSelector((state) => state.allAccounts.accounts);

    const fetchAccounts = async () => {
        http.get('accounts').then(result => {
            dispatch(setAccounts(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchAccounts();
    }, []);



    // const BanUser = index => {
    //     const newUser = [...users];
    //     const user = newUser.at(index);

    //     user.isBan = 1;
    //     newUser.splice(index, 1, user);

    //     dispatch(setUsers(newUser));

    // }

    // const RetrieveUser = index => {
    //     const newUser = [...users];
    //     const user = newUser.at(index);

    //     user.isBan = 0;
    //     newUser.splice(index, 1, user);

    //     dispatch(setUsers(newUser));
    // }

    // const deleteUser = index => {
    //     const newUser = [...users];
    //     console.log("Before Deletion", newUser);
    //     newUser.splice(index, 1);
    //     console.log("After Deletion", newUser);

    //     dispatch(setUsers(newUser));
    // }

    // useEffect(() => {

    // }, [singleUsers]);

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
                        accounts.map((accounts, index) => {

                            return (
                                <tr>
                                    {
                                        accounts.isStatus != "ADMIN" ?
                                            <>
                                                <td>
                                                    <h3 className="text-start fs-6 fw-light">{accounts.isFirst} {accounts.isLast}</h3>
                                                </td>

                                                <td>
                                                    <h3 className="text-start fs-6 fw-normal">{accounts.isAddress}</h3>
                                                </td>

                                                <td>
                                                    <h3 className="text-start fs-6 fw-normal">{accounts.isEmail}</h3>
                                                </td>

                                                <td>
                                                    <h3 className="text-start fs-6 fw-normal">{accounts.isGcash}</h3>
                                                </td>

                                                <td>
                                                    <h3 className="text-start fs-6 fw-normal">{accounts.isStatus}</h3>
                                                </td>

                                                <td className="dese_function text-center">
                                                    <button className="dese_button_users btn text-dark"><i className="fa-solid fa-ban fs-5"></i></button>

                                                    {/* onClick={() => BanUser(index)} */}
                                                </td>
                                            </>
                                            :
                                            ""

                                    }

                                </tr>


                            )



                        })

                    }
                    {/* {accounts.map((accounts, index) => (
                        <tr key={accounts.id}>
                            <td className="dese_name">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through fs-6 fw-light">{users.user_name}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.user_name}</h3>}</td>
                            <td className="dese_email">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through fs-6 fw-light">{users.email_add}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.email_add}</h3>}</td>
                            <td className="dese_gcash">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through fs-6 fw-light">{users.gcash_num}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.gcash_num}</h3>}</td>
                            <td className="dese_address">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through fs-6 fw-light">{users.address}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.address}</h3>}</td>
                            <td className="dese_function text-center">
                                {users.isBan == 0 ?
                                    <>
                                        <button onClick={() => BanUser(index)} className="dese_button_users btn text-dark"><i className="fa-solid fa-ban fs-5"></i></button>
                                        <button disabled onClick={() => deleteUser(index)} className="dese_button_users btn text-dark"><i className="fa-regular fa-trash-can fs-5"></i></button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => RetrieveUser(index)} className="dese_button_users btn text-dark"><i class="fa-solid fa-upload fs-5"></i></button>
                                        <button onClick={() => deleteUser(index)} className="dese_button_users btn text-dark"><i className="fa-regular fa-trash-can fs-5"></i></button>
                                    </>
                                }
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table >
        </>
    );
}

export default UserFunction;