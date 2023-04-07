import React from 'react';
import UserFunction from '../UserFunction/UserFunction';

function UserPage() {
    return (
        <>
            <main>
                <div className="w-50 mx-auto mt-5">
                    <div className="card card-shadow py-3">
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