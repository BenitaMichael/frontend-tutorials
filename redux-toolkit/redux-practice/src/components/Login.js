import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(login({
        name: "Bunnie",
        age: 20,
        email: "bunnie@gmail.com"
      }))}>Log In</button>

      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  )
}

export default Login
