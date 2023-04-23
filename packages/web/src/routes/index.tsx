/*
 * @Author: CaiPeng
 * @Date: 2023-04-03 15:34:12
 * @LastEditors: caipeng
 * @LastEditTime: 2023-04-07 15:28:27
 * @FilePath: \React\SelectDate\packages\web\src\routes\index.tsx
 * @Description: 
 */
import React, { lazy } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))

const routes: RouteObject[] = [
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
]
const router = createHashRouter(routes)

export default function Route() {
  return (
    <RouterProvider router={router} />
  )
}

// import * as React from "react";
// import {
//   createHashRouter,
//   RouterProvider,
// } from "react-router-dom";

// const Login = React.lazy(() => import('../pages/Login'))
// const Home = React.lazy(() => import('../pages/Home'))

// export const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
     
//     ],
//   },
//   {
//     path: "team",
//     element: <Login />,
//   },
// ]);

// export default () => <RouterProvider router={router} />