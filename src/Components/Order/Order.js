import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from '../Dashboard/SideBar/SideBar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const { name } = useParams();
    const [hiredData, setHiredData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tutors')
            .then(res => res.json())
            .then(data => setHiredData(data))
    }, []);
    const selectedTutor = hiredData.find(hired => hired.name === name);

    const onSubmit = data => {
        console.log("clicked");
        const hiredData = {
            hiredTutorName: data.hiredTutorName,
            hiredTutorSalary: data.hiredTutorSalary,
            hiredTutorSubject: data.hiredTutorSubject,
            UserName: data.UserName,
            email: data.email,
            Address: data.Address,
        };
        console.log("order data",hiredData);
        const url = 'http://localhost:5000/AddHired';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hiredData)
        })
            .then(res => {
                alert("Order Placed Successfully")
            })
    };
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <div className="w-100 my-5 mx-auto" >
                    <div className="px-5 pt-3 pb-5" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px', boxShadow: '5px 5px 5px gray' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="customFont mb-3">Hired Tutor</h2>
                                    <div className="form-group">
                                        <label htmlFor="hiredTutorName">Tutor Name</label>
                                        <input id="hiredTutorName" readOnly defaultValue={selectedTutor?.name} {...register("hiredTutorName", { required: true })} className="form-control" />
                                        {errors.hiredTutorName && <span className="text-danger">Name is required <br /></span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hiredTutorSubject">Tutor Subject</label>
                                        <input placeholder="Subject" id="hiredTutorSubject" readOnly defaultValue={selectedTutor?.subject} {...register("hiredTutorSubject", { required: true })}  className="form-control" />
                                        {errors.hiredTutorSubject && <span className="text-danger">Subject is required <br /></span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Tutor Salary</label>
                                        <input readOnly defaultValue={selectedTutor?.salary}  {...register("hiredTutorSalary", { required: true })}  className="form-control" />
                                        {errors.hiredTutorSalary && <span className="text-danger">Salary is required <br /></span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="customFont mb-3 ">Teaching Address</h2>
                                    <div className="form-group">
                                        <label htmlFor="UserName" className="">Your Name</label>
                                        <input id="UserName"  defaultValue={loggedInUser?.name} placeholder="Enter Name" {...register("UserName", { required: true })} className="form-control" />
                                        {errors.UserName && <span className="text-danger">Email is required <br /></span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="UserEmail" className="">Your Email</label>
                                        <input id="UserEmail" readOnly defaultValue={loggedInUser?.email} placeholder="Enter Email" {...register("email", { required: true })} className="form-control" />
                                        {errors.email && <span className="text-danger">Email is required <br /></span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address" className="">Your Address</label>
                                        <input  id="address" placeholder="Enter Address" {...register("Address", { required: true })} className="form-control" />
                                        {errors.Address && <span className="text-danger">Email is required <br /></span>}
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Place Order" className="btn-danger form-control mt-5 w-100 ml-auto" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;