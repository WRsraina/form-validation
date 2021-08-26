import React from 'react';
import { useHistory } from 'react-router-dom';

export const SignupForm = () => {
  const history = useHistory();

  const redirectUserToLogin = () => {
    return  history.push("/login")
  }

  return(
    <div>
        <label>
          Firstname:
          <input type="text" name="firstname" />
          </label>
          <label>
          Lastname:
          <input type="text" name="lastname" />
          </label>
          <label>
          Email:
          <input type="text" name="email" />
          </label>
          <label>
          Password:
          <input type="text" name="password" />
          </label>
          <button onClick={redirectUserToLogin}>Submit</button>
    </div>
  )
}