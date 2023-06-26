// import { createSlice, createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'

// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   amount: number
//   loginInfo: object
// }

// const initialState: CounterState = {
//   amount: 0,
//   loginInfo: {}
// }

// createAction<number>('increment')

// createReducer(0, {
//   increment: (state, action: PayloadAction<number>) => state + action.payload,
// })

// const fetchLogin = createAsyncThunk(
//   'login/fetchLogin',
//   async (userId: number) => {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`, {
//       headers: {},
//       body: JSON.stringify({}),
//     })
//     // Inferred return type: Promise<MyData>
//     return await response.json()
//   }
// )

// const loginSlice = createSlice({
//   // 自动创建type， 比如：reducer dispatchCreatePost, 会创建一个 type 名称为 login/dispatchCreatePost
//   name: 'login',
//   initialState: initialState,
//   reducers: {
//     // receiveAll: {
//     //   reducer(
//     //     state,
//     //     action: PayloadAction<Page[], string, { currentPage: number }>
//     //   ) {
//     //     state.all = action.payload
//     //     state.meta = action.meta
//     //   },
//     //   prepare(payload: Page[], currentPage: number) {
//     //     return { payload, meta: { currentPage } }
//     //   },
//     // },
//     dispatchLogin(state, action) {
//       let { payload } = action
//       console.log(state, action)
//       state.loginInfo = payload.params
//     },
//     dispatchCreatePost(state, action) {},
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.amount += action.payload
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
//       // state.entities[payload.id] = payload
//     })
//     builder.addCase(fetchLogin.rejected, (state, action) => {
//       // if (action.payload) {
//       //   // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
//       //   state.error = action.payload.errorMessage
//       // } else {
//       //   state.error = action.error
//       // }
//     })
//   }
// })
// // Extract the action creators object and the reducer
// const { actions, reducer } = loginSlice
// // Extract and export each action creator by name
// export const { dispatchCreatePost, dispatchLogin } = actions
// // Export the reducer, either as a default or named export
// export default reducer
