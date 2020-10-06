import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEvent from './components/AddEvent/AddEvent';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import EventTasks from './components/EventTasks/EventTasks';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registration">
            <Registration></Registration>
          </PrivateRoute>
          <PrivateRoute path="/events">
            <EventTasks></EventTasks>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/add-event">
            <AddEvent></AddEvent>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
