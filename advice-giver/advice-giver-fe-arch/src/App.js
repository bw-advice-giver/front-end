import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import AddQuestion from './components/AddQuestion';
import QuestionList from './components/QuestionsList';
import FormikAddQuestion from './components/AddQuestion';

// Private Route(s)
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Advice Giver</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
          <li>
            <Link to="/questions">Question List</Link>
          </li>
          <li>
            <Link to="/addquestion">Post A Question</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/questions" component={QuestionList}/>
          <PrivateRoute exact path="/addquestion" component={FormikAddQuestion}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
