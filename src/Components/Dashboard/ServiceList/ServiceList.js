import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ServiceList = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://desolate-stream-31459.herokuapp.com/tutors")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handelDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            fetch(`https://desolate-stream-31459.herokuapp.com/deleteTutor/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(data => data.json())
                .then(result => {
                    alert("delete Successfully!! Go Homepage And See!!");
                })
        }
    }
    return (
        <div>
            <div className="row w-100">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <h1 className="customFont my-5 text-center">Tutor List</h1>
                    <table className="table table-striped  w-75 mx-auto">
                        <thead>
                            <tr>
                                <th className="text-secondary " scope="col">No</th>
                                <th className="text-secondary" scope="col">Tutor Name</th>
                                <th className="text-secondary " scope="col">Tutor Email</th>
                                <th className="text-secondary" scope="col">Subject</th>
                                <th className="text-secondary " scope="col">Salary</th>
                                <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {
                                services.map((service, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.subject}</td>
                                        <td>{service.salary}</td>
                                        <td className=" btn-area"><FontAwesomeIcon onClick={() => handelDelete(service._id)} className="text-danger h3" icon={faTrashAlt} /></td>
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

export default ServiceList;