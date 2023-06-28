import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '@web/store' // 类型导入,并不造成 循环导入

export interface TabState {
  curTab: any[]
  currentTab?: string | undefined
  status?: 'idle' | 'loading'
  reloadPath: string // 需要刷新的tab路径
}

const initialState: TabState = {
  curTab: [],
  reloadPath: 'null' // 需要刷新的tab路径
}

// below is called a thunk action: `dispatch(incrementAsync(10))`
export const demoAsync = createAsyncThunk(
  'demo/fetch-data',
  async (data: any) => {
    const response = await new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve({ data }), 200)
    )
    return response.data
  }
)

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTabs: (state, action: PayloadAction<any[]>) => {
      state.curTab = action.payload
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
    setReloadPath: (state, action) => {
      state.reloadPath = action.payload
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(demoAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(demoAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.currentTab = action.payload
      })
  }
})

export const { setTabs, setCurrentTab, setReloadPath } = tabSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTabs = (state: RootState) => state.tab.curTab
export const selectCurrentTab = (state: RootState) => state.tab.currentTab
export const selectReloadPath = (state: RootState) => state.tab.reloadPath

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const setTabTitle =
  (title: string): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCurrentTab(getState())
    console.log('更新标题', currentValue, '->', title)
    dispatch(setCurrentTab(title))
  }
export default tabSlice.reducer
