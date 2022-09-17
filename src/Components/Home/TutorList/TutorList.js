import React from 'react';
import { useHistory } from 'react-router';
import './TutorList.css';
import {useSpring, animated, config} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const TutorList = ({ tutor }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))

    const history = useHistory();

    const handelClick = (tutorName) => {
        const url = `/hired/${tutorName}`;
        history.push(url);
    }
    return (
 
        <animated.div className="col-md-4" 
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
        >
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
        </animated.div>
    );
};

export default TutorList;