import React from 'react';
import { useFormik } from 'formik';
import { Input, Button } from '@/shared/ui';
import {schema} from "./schema";
import css from './form.module.css';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
  );
}

export default LoginForm;
