import React, { useEffect, useState } from 'react';
import TutorList from '../TutorList/TutorList';

const Tutor = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetch("https://desolate-stream-31459.herokuapp.com/tutors")
            .then(res => res.json())
            .then(data => setTutors(data))
    }, [])
    return (
        <div className="w-100 bg-light pt-5" id="tutor">
            <h2 className="text-center customFont h1">Find Your Tutor</h2>
            <hr style={{borderTop: '2px dashed red'}} />
            <h5 className="text-center customFont">We Are Specialist At </h5>
            <div className="row container mx-auto">
                {
                    tutors.map(tutor => <TutorList tutor={tutor}></TutorList>)
                }
            </div>
        </div>
    );
};

export default Tutor;