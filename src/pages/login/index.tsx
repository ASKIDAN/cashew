import React from 'react'
import { LoginForm } from '@/features'
import css from './login.module.css'

const Login = () => (
  <div className={css.login}>
    <LoginForm />
  </div>
)

export default Login
