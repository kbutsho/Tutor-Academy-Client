import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://desolate-stream-31459.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser])
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 w-100">
                <div className="w-100">
                    <h2 className="customFont my-5 h1 text-center">Order List</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">No</th>
                                <th className="text-secondary" scope="col">Tutor Name</th>
                                <th className="text-secondary" scope="col">Tutor Subject</th>
                                <th className="text-secondary" scope="col">Tutor Salary</th>
                                <th className="text-secondary" scope="col">Order Name</th>
                                <th className="text-secondary" scope="col">Order Address</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.hiredTutorName}</td>
                                        <td>{order.hiredTutorSubject}</td>
                                        <td>{order.hiredTutorSalary}</td>
                                        <td>{order.UserName}KG</td>
                                        <td>{order.Address}</td>
                                       <td>
                                       <select className="form-control">
                                            <option disabled={true} value="Not set">Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="On going">On going</option>
                                            <option value="Done">Done</option>
                                        </select>
                                       </td>
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
export default OrderList;