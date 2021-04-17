import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg  navbar-light bg-info fixed-top">
                <div className="container-fluid container">
                    <h3 className="text-white customFont" style={{ letterSpacing: '2px' }}>
                        <img style={{ width: '28px' }} className="mr-4" src={logo} alt="logo" />
                        Tutor Academy
                    </h3>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav font-weight-bold ml-auto ">
                            <Link className="nav-link   px-3 text-white" to="/home">Home</Link>
                            <a className="nav-link px-3 text-white" href="#tutor">Available Tutor</a>
                            <Link className="nav-link px-3 text-white" to="/home">About Us</Link>
                            <Link className="nav-link px-3 text-white" to="/home">Contact Us</Link>
                            <Link className="nav-link px-3 text-white" to="/dashboard">DashBoard</Link>
                            {
                                loggedInUser.email ?
                                    <div className="d-flex">
                                        <div> <button className="mx-4 btn btn-danger" onClick={() => setLoggedInUser({})}>Log Out</button></div>
                                        {/* <div className="rounded text-white bg-primary p-2">{loggedInUser.name || loggedInUser.email}</div> */}
                                    </div> :
                                    <Link className="nav-link px-4 font-weight-bold btn btn-warning" to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;