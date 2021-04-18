import React, { useEffect, useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://desolate-stream-31459.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="w-100 bg-light py-5" id="review">
            <h2 className="text-center customFont h1">Our Student's Says</h2>
            <hr style={{borderTop: '2px dashed red'}} />
            <h5 className="text-center customFont"> Reviews </h5>
            <div className="row container mx-auto">
                {
                    reviews.map(review => <ReviewList review={review}></ReviewList>)
                }
            </div>
        </div>
    );
};

export default Review;