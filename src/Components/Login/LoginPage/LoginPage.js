import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="login-form d-flex align-items-center">
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default LoginPage;