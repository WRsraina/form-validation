import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import {SignupForm} from './components/SignUp'
import {LoginForm} from './components/Login'
import {DashBoard} from './components/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
      <LoginForm />
    </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/dashboard">
        <DashBoard />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
