import React from 'react';
import { useHistory } from 'react-router';
import './TutorList.css';

const TutorList = ({ tutor }) => {
    const history = useHistory();
    const handelClick = (tutorName) => {
        const url = `/hired/${tutorName}`;
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <div className="box p-4">
                <div className="img-area text-center py-4">
                    <img className="" style={{ width: '200px', borderRadius: '15px' }} src={tutor.imageURL} alt="" />
                </div>
                <h4 className="mt-3 customFont"> {tutor.name}</h4>
                <p> Specialist In - {tutor.subject}</p>
                <div className="row">
                    <div className="col-6">
                        <h4 className="font-weight-bold text-danger">Salary {tutor.salary}</h4>
                    </div>
                    <div className="col-6 mt-auto">
                        <button className=" btn ml-4  btn-success" onClick={() => handelClick(tutor.name)}>Hired Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorList;