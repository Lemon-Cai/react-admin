/*
 * @Author: CaiPeng
 * @Date: 2022-11-21 11:23:20
 * @LastEditors: caipeng
 * @LastEditTime: 2023-02-02 15:14:01
 * @FilePath: \React\SelectDate\src\store\index.ts
 * @Description: 
 */
// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// // Reducer
// import reducer from './reducer'
// // Middleware: thunk
// import thunk from 'redux-thunk'
// // Middleware: client
// // import requestMiddleware from 'middlewares'
// // request
// // import * as Request from 'utils/Request'
// // Store
// const store = createStore(reducer)

// export default store

// 升级 redux -> @reduxjs/toolkit

import { configureStore, /* MiddlewareArray */ } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { combineReducers } from 'redux'

import Login from './Login'

const reducers = combineReducers({
  login: Login
})

export const store = configureStore({
  reducer: reducers,
  // 自定义中间件
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware()
  //     .prepend(
  //       // correctly typed middlewares can just be used
  //       additionalMiddleware,
  //       // you can also type middlewares manually
  //       untypedMiddleware as Middleware<
  //         (action: Action<'specialAction'>) => number,
  //         RootState
  //       >
  //     )// prepend and concat calls can be chained
  //     .concat(logger)
  // }
  // way2:
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
