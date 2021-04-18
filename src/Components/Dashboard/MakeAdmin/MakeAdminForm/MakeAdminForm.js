import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdminForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const AdminData = {
            name: data.name,
            email: data.email,
        };
        console.log(AdminData);
        const url = 'https://desolate-stream-31459.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(AdminData)
        })
            .then(res => {
                alert("Admin Added Successfully")
            })
    };
    return (
        <section className="w-75 mx-auto my-5" >
            <div className="p-5" style={{ backgroundColor: "aqua", borderRadius: '15px', boxShadow: '5px 5px 5px gray' }}>
                <h2 className="customFont mb-4 text-center">Add an Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="name" className="">Admin Name</label>
                                <input id="name" defaultValue="" placeholder="Enter Name" {...register("name", { required: true })} className="form-control" />
                                {errors.name && <span className="text-danger">Name is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="">Admin Email</label>
                                <input id="email" defaultValue="" placeholder="Enter Email" {...register("email", { required: true })} className="form-control" />
                                {errors.email && <span className="text-danger">Email is required <br /></span>}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Save" className="btn-danger form-control mt-4 w-25 ml-auto" />
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </section>
    );
};

export default MakeAdminForm;