import React from 'react';
import SideBar from '../SideBar/SideBar';
import MakeAdminForm from './MakeAdminForm/MakeAdminForm';

const MakeAdmin = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 my-5">
                <MakeAdminForm></MakeAdminForm>
            </div>
        </div>
    );
};

export default MakeAdmin;