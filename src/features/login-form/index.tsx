import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '@/shared/ui';
import {schema} from "./schema";
import css from './form.module.css';
import {requestLogin, validateToken} from "@/shared/api";
import {ROUTES, TOKEN_KEY, USER_KEY} from "@/shared";
import { message } from 'antd';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: schema,
    onSubmit: (values, helpers) => {
      helpers.setSubmitting(true);
      requestLogin(values)
        .then((data) => {
          localStorage.setItem(TOKEN_KEY, data.token);
          navigate(ROUTES.INDEX)
        })
        .catch((err) => {
          messageApi.error(err.message)
          helpers.setSubmitting(false);
        })
    },
  });

  useEffect(() => {
    validateToken().then(data => {
      if (data) {
        navigate(ROUTES.INDEX)
      }
    })
  }, [navigate])

  return (
    <>
      {contextHolder}
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <span>Email</span>
        <Input
          className={css.marginTop10}
          status={formik.errors.email && formik.touched.email ? "error" : undefined}
          disabled={formik.isSubmitting}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <span
          className={css.marginTop10}>
          Password
        </span>
        <Input
          className={css.marginTop10}
          status={formik.errors.password && formik.touched.password ? "error" : undefined}
          disabled={formik.isSubmitting}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <Button
          className={css.marginTop10}
          disabled={formik.isSubmitting}
          type="primary"
          htmlType="submit">
          Login
        </Button>
      </form>
    </>
  );
}
