import React, { lazy } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'))
const Container = lazy(() => import('./pages/Container'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Container />
    // errorElement: <ErrorPage />,
    // children: [
    //   ...routes
    // ],
  },
  {
    path: '/login',
    element: <Login />,
    // loader: rootLoader,
    // errorElement: <ErrorPage />,
  },
]
const router = createHashRouter(routes)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}