import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTutorForm = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '3cc3e1d0b3bbbd6f18354e4e805ab433');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                alert("Uploading Photo....... Please Wait!")
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const onSubmit = data => {
        const tutorData = {
            name: data.name,
            email: data.email,
            salary: data.salary,
            subject: data.subject,
            imageURL: imageURL
        };
        console.log(tutorData);
        const url = 'https://desolate-stream-31459.herokuapp.com/addTutor';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tutorData)
        })
            .then(res => {
                alert("Add Tutor Successfully")
            })
    };
    return (
        <section className="w-75 my-5" >
            <div className="p-5" style={{ backgroundColor: "aqua", borderRadius: '15px', boxShadow: '5px 5px 5px gray' }}>
                <h2 className="customFont mb-4 text-center">Add a Tutor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name" className="">Tutor's Name</label>
                                <input id="name" defaultValue="" placeholder="Enter Name" {...register("name", { required: true })} className="form-control" />
                                {errors.name && <span className="text-danger">Name is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="">Tutor's Email</label>
                                <input id="email" defaultValue="" placeholder="Enter Email" {...register("email", { required: true })} className="form-control" />
                                {errors.email && <span className="text-danger">Email is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo" className="">Tutor's Photo</label>
                                <input id="photo" type="file" onChange={handleImageUpload} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="subject" className="">Tutor's Subject</label>
                                <input id="subject" defaultValue="" placeholder="Enter Subject" {...register("subject", { required: true })} className="form-control" />
                                {errors.subject && <span className="text-danger">Subject is required <br /></span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="salary" className="">Tutor's Salary</label>
                                <input id="salary" defaultValue="" placeholder="Enter Salary" {...register("salary", { required: true })} className="form-control" />
                                {errors.salary && <span className="text-danger">Salary is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Save" className="btn-danger form-control mt-5 w-25 ml-auto" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTutorForm;