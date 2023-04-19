import React, { useEffect } from 'react';
import { setUsers } from '../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function UserFunction() {
    const users = useSelector((state) => state.allUsers.users)
    const singleUsers = useSelector((state) => state.getUser)

    const dispatch = useDispatch();

    const BanUser = index => {
        const newUser = [...users];
        const user = newUser.at(index);

        user.isBan = 1;
        newUser.splice(index, 1, user);

        dispatch(setUsers(newUser));
    }

    useEffect(() => {

    }, [singleUsers]);
    return (
        <>
            <table className="table table-stripped">
                <thead className="dese_thead">
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>GCASH NUMBER</th>
                        <th>ADDRESS</th>
                        <th className="text-center">FUNCTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={users.id}>
                            <td className="dese_name">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through text-body-tertiary fs-6 fw-light">{users.user_name}</h3>
                                :
                                <h3 className="text-start fs-6">{users.user_name}</h3>}</td>
                            <td className="dese_email">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through text-body-tertiary fs-6 fw-light">{users.email_add}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.email_add}</h3>}</td>
                            <td className="dese_gcash">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through text-body-tertiary fs-6 fw-light">{users.gcash_num}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.gcash_num}</h3>}</td>
                            <td className="dese_address">{users.isBan == 1 ?
                                <h3 className="text-start text-decoration-line-through text-body-tertiary fs-6 fw-light">{users.address}</h3>
                                :
                                <h3 className="text-start fs-6 fw-normal">{users.address}</h3>}</td>
                            <td className="dese_function text-center">{users.isBan == 0 ?
                                <button onClick={() => BanUser(index)} className="dese_button btn btn-danger">BAN</button>
                                :
                                <button disabled onClick={() => BanUser(index)} className="dese_button btn btn-danger">BAN</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserFunction;