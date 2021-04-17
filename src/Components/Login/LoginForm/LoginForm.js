import React, { useContext, useState } from 'react';
import firebaseConfig from '../../Firebase/firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import './LoginForm.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const googleProvider = new firebase.auth.GoogleAuthProvider();
const LoginForm = () => {

   const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handelGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch(err => {

            })
    }
    const handelSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signOutUser);

            })
            .catch(err => {

            })
    }
    const handelChange = (event) => {
        let isFieldsValid = true;
        if (event.target.name === "email") {
            isFieldsValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const isPassValid = event.target.value.length > 4;
            const isPassHasNum = /\d{1}/.test(event.target.value);
            isFieldsValid = isPassValid && isPassHasNum;
        }
        if (event.target.name === "name") {
            const isNameHasLength = event.target.value.length > 3;
            isFieldsValid = isNameHasLength;
        }
        if (isFieldsValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
        else {
            newUser ? alert("Invalid Name Email or Password ! Check Again!") :
                alert("Invalid Email or Password ! Check Again!");
        }
    }
    const [createUserError, setCreateUserError] = useState(); // error state when create User using email
    const [signInError, setSignInError] = useState(); // error state when  User login using email
    const handelSubmit = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setCreateUserError(error.message);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setSignInError(error.message);
                });
        }
        event.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
            .then(res => {
                history.replace(from);
            })
            .catch(error => {

            })
    }
    return (
        <div className="login-area">
            {
                newUser ? <h4>Create an Account</h4> :
                    <h4>Login</h4>
            }
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    {
                        newUser &&
                        <div>
                            <label for="Name">Name :</label>
                            <input type="text" className="form-control" name="name" id="Name" onBlur={handelChange} placeholder="Your Name" required />
                            {
                                newUser && <p className="text-danger"><small>*must contain 4 letter</small></p>
                            }
                        </div>
                    }
                </div>
                <div className="form-group">
                    <label for="Email">Email :</label>
                    <input type="text" className="form-control" onBlur={handelChange} name="email" placeholder="Your Email" required id="Email" />
                    {
                        newUser ? <p className="text-danger"><small>*Use valid Email</small></p> : <p className="text-danger"><small>*Use Registered Email</small></p>
                    }
                </div>
                <div className="form-group ">
                    <label for="password">PassWord :</label>
                    <input type="password" className="form-control" onBlur={handelChange} name="password" placeholder="Your PassWord" required id="password" />

                    {
                        newUser ? <p className="text-danger"><small>*Must contain 4 letter & 1 number</small></p> : <p className="text-danger"><small>*Use Registered Password</small></p>
                    }
                </div>
                <input type="submit" className="btn btn-primary w-100 mt-3 " value={newUser ? "Create an Account" : "Sing in"} />
            </form>
            {
                newUser ? <div >
                    <label htmlFor="newUser" className="mx-2">Already have an account ? <span className="text-danger">Login</span> </label>
                    <input type="checkbox" name="newUser" id="newUser" onChange={() => setNewUser(!newUser)} />
                </div> :
                    <div>
                        <label htmlFor="newUser" className="mx-1">Don't have an account ? <span className="text-danger">Create an Account</span> </label>

                        <input type="checkbox" name="newUser" id="newUser" onChange={() => setNewUser(!newUser)} />
                    </div>
            }
            <div className="hr"></div>
            <p className="text-center">or</p>
            {
                user.isSignIn ? <button className="btn btn-primary" onClick={handelSignOut}>Sign out</button> :
                    <button className="btn btn-danger w-100 mb-2 googleBtn" onClick={handelGoogleSignIn}> Sign In With Google</button>
            }
            <div className="error text-danger">
                <p>{createUserError}</p>
                <p>{signInError}</p>
            </div>
        </div>
    );
};

export default LoginForm;