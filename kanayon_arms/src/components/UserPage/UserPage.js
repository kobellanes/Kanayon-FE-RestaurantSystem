import React from 'react';
import UserFunction from '../UserFunction/UserFunction';

function UserPage() {
    return (
        <>
            <main>
                <div className="w-50 mx-auto mt-5">
                    <div className="border border-dark rounded p-3">
                        <h1>List of Users</h1>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <UserFunction />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UserPage;