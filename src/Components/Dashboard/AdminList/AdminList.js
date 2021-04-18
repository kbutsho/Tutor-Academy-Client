import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch("https://desolate-stream-31459.herokuapp.com/getAdmin")
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])
    return (
        <div>
            <div className="row w-100">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <h1 className="customFont my-5 text-center">Admin List</h1>
                    <table className="table table-striped  w-75 mx-auto">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">No</th>
                                <th className="text-secondary" scope="col">Admin Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map((admin, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminList;