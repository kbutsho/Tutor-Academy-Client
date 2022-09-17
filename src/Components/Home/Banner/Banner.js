import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area d-flex align-items-center">
            <div className="container">
                <div className="text-area">
                    <h1 className="customFont text-white" style={{ fontSize: '50px' }}>Professional Tutor <br /> for Your Children</h1>
                    <h4 class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Soluta perspiciatis debitis minus animi deserunt dolorem?</h4>
                    <a href="#tutor"><button className="btn btn-success mt-4">Find Your Tutor</button></a> 
                
                </div>
            </div>
        </div>
    );
};

export default Banner;