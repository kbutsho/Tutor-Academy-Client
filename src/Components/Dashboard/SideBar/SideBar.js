import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './SideBar.css';


const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://desolate-stream-31459.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])
    return (
        <div className="text-center text-white sideBarArea">
            <img src={logo} className="w-25 mt-4" alt="" />
            <div>
                {
                    isAdmin ?
                        <div>
                            <button className="btn btn-primary w-75 my-1">Admin DashBoard</button>
                            {
                                loggedInUser.email &&
                                <div>
                                    <div className="text-white btn w-75 my-1 bg-primary ">Admin : {loggedInUser.name || loggedInUser.email}</div>
                                </div>
                            }
                            <Link className="btn btn-danger w-75 my-1" to="/home">Home</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/dashboard">Orders</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/addTutor">Add Tutor</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/makeAdmin">Make Admin</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/adminList">Admin List</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/ServiceList">Service List</Link>
                            {/* <Link className="btn btn-danger w-75 my-1" to="/manageTutor">Manage Tutor</Link> */}
                            <Link className="btn btn-danger w-75 my-1" to="/addReview">Add Review</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/home" onClick={() => setLoggedInUser({})} >Log Out</Link>
                        </div> :
                        <div>
                            <button className="btn btn-primary w-75 my-1">User DashBoard</button>
                            {
                                loggedInUser.email &&
                                <div>
                                    <div className="text-white btn w-75 my-1 bg-primary ">User : {loggedInUser.name || loggedInUser.email}</div>
                                </div>
                            }
                            <Link className="btn btn-danger w-75 my-1" to="/home">Home</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/dashboard">Orders</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/addReview">Add Review</Link>
                            <Link className="btn btn-danger w-75 my-1" to="/home" onClick={() => setLoggedInUser({})} >Log Out</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default SideBar;