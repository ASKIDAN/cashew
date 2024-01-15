import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'
import Layout from './layout'

import { ROUTES } from '@/shared'
import { ProtectedRoute } from '@/features'

const Router = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.INDEX} element={<Layout />}>
      <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Route>
    <Route path={ROUTES.INDEX + '*'} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  </Routes>
)

export default Router
