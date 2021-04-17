import React from 'react';
import SideBar from '../SideBar/SideBar';
import AddReviewForm from './AddReviewForm/AddReviewForm';



const AddReview = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 d-flex justify-content-center align-items-center">
                <AddReviewForm></AddReviewForm>
            </div>
        </div>
    );
};

export default AddReview;