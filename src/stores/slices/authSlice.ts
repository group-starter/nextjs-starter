import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  currentUser: any
}

const initialState: AuthState = {
  currentUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state, { payload }: { payload: Partial<AuthState> }) => {
      Object.keys(payload).forEach((key) => {
        state[key as keyof AuthState] = payload[key as keyof AuthState]
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { setState } = authSlice.actions

export default authSlice.reducer
