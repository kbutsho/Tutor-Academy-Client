import React from 'react';
import './ReviewList.css';

const ReviewList = ({ review }) => {
    return (
        <div className="col-md-4 text-white">
            <div className="reviewList bg-info p-3">
                <div className="row">
                    <div className="col-4 d-flex align-items-center">
                        <div className="img-area ">
                            <img src={review.imageURL} style={{ width: '100%', borderRadius: '20px' }} alt="" />
                        </div>
                    </div>
                    <div className="col-8 mt-2">
                        <h4>{review.name}</h4>
                        <p>{review.review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;