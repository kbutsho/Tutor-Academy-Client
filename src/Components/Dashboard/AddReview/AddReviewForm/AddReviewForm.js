import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../../../App';

const AddReviewForm = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
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
            review: data.review,
            imageURL: imageURL
        };
        console.log(tutorData);
        const url = 'http://localhost:5000/addReview';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tutorData)
        })
            .then(res => {
                alert("Review Added Successfully")
            })
    };
    return (
        <section className="w-75 my-5" >
            <div className="p-5" style={{ backgroundColor: "aqua", borderRadius: '15px', boxShadow: '5px 5px 5px gray' }}>
                <h2 className="customFont mb-4 text-center">Add a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name" className="">Your Name</label>
                                <input id="name" defaultValue={loggedInUser.name} placeholder="Enter Name" {...register("name", { required: true })} className="form-control" />
                                {errors.name && <span className="text-danger">Name is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="">Your Email</label>
                                <input id="email" defaultValue={loggedInUser.email} placeholder="Enter Email" {...register("email", { required: true })} className="form-control" />
                                {errors.email && <span className="text-danger">Email is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo" className="">Upload Profile Photo</label>
                                <input id="photo" type="file" onChange={handleImageUpload} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="review" className="">Add Review</label>
                                <div className="form-group">
                                    <textarea className="form-control" id="review" cols="30" rows="10" {...register("review", { required: true })} placeholder="Review *"></textarea>
                                    {errors.review && <span className="text-danger">Review is required <br /></span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn-danger form-control mr-auto" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReviewForm;