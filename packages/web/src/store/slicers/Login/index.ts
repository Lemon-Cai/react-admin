import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@web/store'
import { UserInfo } from '@web/app_models/user'
import { MenuTheme } from 'antd'

export interface LoginState {
  collapsed: boolean // 菜单收纳状态, 用于垂直布局
  theme: MenuTheme
  menuMode: 'horizontal' | 'vertical' // 菜单模式, 用于水平布局
  UserInfo: UserInfo & { is_oidc_user: boolean }
}

const initialState: LoginState = {
  // 折叠状态
  collapsed: false,
  // 主题
  theme: 'dark',
  // 菜单
  menuMode: 'horizontal',
  // 用户信息
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
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
    setCollapsed(state, action) {
      state.collapsed = action.payload
    },
    setMenuMode(state, action) {
      state.menuMode = action.payload
    }
  },
  extraReducers: (builder) => {
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = loginSlice

// Extract and export each action creator by name
export const { setUserInfo, setTheme, setCollapsed, setMenuMode } = actions

export const selectUserInfo = (state: RootState) => state.login.UserInfo
export const selectTheme = (state: RootState) => state.login.theme
export const selectCollapsed = (state: RootState) => state.login.collapsed
export const selectMenuMode = (state: RootState) => state.login.menuMode

// const { UserInfo, theme, collapsed, collapsed, menuMode } = (state: RootState) => state.login

// Export the reducer, either as a default or named export
export default reducer
