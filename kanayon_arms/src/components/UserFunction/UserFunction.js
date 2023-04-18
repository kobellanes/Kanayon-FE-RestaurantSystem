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
            {
                users.length > 0 ?
                    users.map((users, index) => {
                        return (
                            <main>
                                <div className="col-12 d-flex justify-content-around mt-3">
                                    <div className="w-100 ms-1">
                                        {
                                            users.isBan == 1 ?
                                                <h3 className="text-start text-decoration-line-through">{users.user_name}</h3>
                                                :
                                                <h3 className="text-start">{users.user_name}</h3>
                                        }
                                    </div>


                                    <div className="">
                                        {
                                            users.isBan == 0 ?
                                                <button onClick={() => BanUser(index)} className="btn btn-danger ms-5">BAN</button>
                                                :
                                                <button disabled onClick={() => BanUser(index)} className="btn btn-danger ms-5">BAN</button>
                                        }
                                    </div>

                                </div>
                            </main >
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

export default UserFunction;