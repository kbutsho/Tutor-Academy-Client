import React from 'react';
import SideBar from '../SideBar/SideBar';
import AddTutorForm from './AddTutorForm/AddTutorForm';

const AddTutor = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 my-5 d-flex justify-content-center align-items-center">
                <AddTutorForm></AddTutorForm>
            </div>
        </div>
    );
};

export default AddTutor;