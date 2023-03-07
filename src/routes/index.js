import React, { Suspense, lazy } from 'react'
// v6.x 之后 使用 Routes instead of Switch
import {
  // HashRouter as Router,
  // Routes,
  // Route,
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'

import { Spin } from 'antd'

// import Loading from 'components/Loading'
// import useLogger from 'utils/hooks/useLogger'

// ===============路由==================

const Login = lazy(() => import('../Pages/Login'))
// const ErrorPage  = lazy(() => import('../Pages/ErrorPage'))
const Main = lazy(() => import('../Pages/Main'))

// const routes = [
// ]

const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
    // loader: rootLoader,
    // errorElement: <ErrorPage />,
    children: []
  },
  {
    path: '/main/*',
    element: <Main />
    // errorElement: <ErrorPage />,
    // children: [
    //   ...routes
    // ],
  }
])

export default function AppRoutes() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router} fallbackElement={<Spin />} />
      </Suspense>
    </Provider>
  )
}

// createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Login />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

// export default function AppRoutes ({ match }) {
//   // useLogger()
//   return (
//     <Provider store={store}>
//       <Router>
//         <Suspense fallback={<Spin />}>
//           <Routes>
//             {/* {routes.map(({ exact = true, ...route }) => {
//               return (
//                 <Route
//                   key={route.path}
//                   // exact={exact}
//                   // 大小写敏感
//                   caseSensitive
//                   path={`${match?.url || ''}${route.path}`}
//                   element={React.lazy(() => route.component)}
//                 />
//               )
//             })} */}
//             <Route
//               path="/*"
//               element={Login}
//             />
//           </Routes>
//         </Suspense>
//       </Router>
//     </Provider>
//   )
// }
