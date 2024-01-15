import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login'
import Dashboard from './dashboard'

import { ROUTES } from '@/shared'
import ProtectedRoute from "@/features/protected-route";

const Router = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route index path={ROUTES.INDEX} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path={ROUTES.INDEX + '*'} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  </Routes>
);

export default Router;
