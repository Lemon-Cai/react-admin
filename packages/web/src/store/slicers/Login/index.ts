import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@web/store'
import { UserInfo } from '@web/app_models/user'

export interface UserState {
  UserInfo: UserInfo & { is_oidc_user: boolean }
}

const initialState: UserState = {
  UserInfo: {
    username: '',
    displayName: '',
    permission: [],
    // @ts-ignore
    token: null,
    is_oidc_user: false
  }
}


const loginSlice = createSlice({
  // 自动创建type， 比如：reducer dispatchCreatePost, 会创建一个 type 名称为 login/dispatchCreatePost
  name: 'login',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.UserInfo = action.payload
    }
  },
  extraReducers: (builder) => {
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = loginSlice

// Extract and export each action creator by name
export const { setUserInfo } = actions

export const selectUserInfo = (state: RootState) => state.login.UserInfo
// Export the reducer, either as a default or named export
export default reducer
