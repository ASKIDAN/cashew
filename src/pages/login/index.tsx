import React from 'react';
import LoginForm from "@/features/login-form";
import css from './login.module.css';

const Login = () => (
  <div className={css.login}>
    <LoginForm />
  </div>
);

export default Login;
