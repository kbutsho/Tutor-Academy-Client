import React from 'react';
import chemistry from '../../../images/s1.png';
import physics from '../../../images/s2.png';
import math from '../../../images/s3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Chemistry',
        img: chemistry
    },
    {
        name: 'Physics',
        img: physics
    },
    {
        name: 'Math',
        img: math
    }
]

const Services = () => {
    return (
        <section className="services-container bg-light py-5">
            <div className="text-center">
                
                <h2 className="customFont">Services We Provide</h2>
                <hr style={{borderTop: '2px dashed red'}} />
                <h5 className="customFont">OUR SERVICES</h5>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;