import React from 'react';
import {Button, Input} from "../common";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <Input type='text' placeholder="Input your's login"/>
        <Input type='password' placeholder="Input your's password"/>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Login;