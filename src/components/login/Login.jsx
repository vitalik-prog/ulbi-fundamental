import React, {useContext} from 'react';
import {Button, Input} from "../common";
import {AuthContext} from "../../context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth','true')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <Input type='text' placeholder="Input your's login"/>
        <Input type='password' placeholder="Input your's password"/>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Login;