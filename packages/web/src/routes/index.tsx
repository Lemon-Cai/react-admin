/*
 * @Author: CaiPeng
 * @Date: 2023-04-03 15:34:12
 * @LastEditors: caipeng
 * @LastEditTime: 2023-06-26 18:05:02
 * @FilePath: \React\SelectDate\packages\web\src\routes\index.tsx
 * @Description: 
 */
import React, { lazy } from 'react'
// import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const ErrorPage  = lazy(() => import('../pages/ErrorPage'))

type CustomRoute = CommonObjectType & RouteObject

export const routes: CustomRoute[] = [
  {
    path: '/',
    element: <Home />
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
  {
    path: "/403",
    element: <ErrorPage />
  }
]