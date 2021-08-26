import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { isPassword, isEmailCorrect } from '../existingUserCredential';

export const LoginForm = () => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const redirectUserToDashBoard = () => {
    if (isPassword(password) && isEmailCorrect(email)) {
    return  history.push("/dashboard")
    }
    throw 'Login failed';
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return(
    <div>
      <p>New to website? <Link to="/signup">Create an account</Link></p>
        <label>
          Email:
          <input type="text" name="email" onChange={handleEmail}/>
          </label>
          <label>
          Password:
          <input type="text" name="password" onChange={handlePassword}/>
          </label>
          <button onClick={redirectUserToDashBoard}>Submit</button>
    </div>
  )
}