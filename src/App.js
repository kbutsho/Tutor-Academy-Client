import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage';
import LoginPage from './Components/Login/LoginPage/LoginPage';
import AddTutor from './Components/Dashboard/AddTutor/AddTutor';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageTutor from './Components/Dashboard/ManageTutor/ManageTutor';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Order from './Components/Order/Order';
import OrderList from './Components/Order/OrderList/OrderList';
import AdminList from './Components/Dashboard/AdminList/AdminList';
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <PrivateRoute path="/addTutor">
            <AddTutor></AddTutor>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/adminList">
            <AdminList></AdminList>
          </PrivateRoute>
          <PrivateRoute path="/manageTutor">
            <ManageTutor></ManageTutor>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/hired/:name">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <OrderList></OrderList>
          </PrivateRoute>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;