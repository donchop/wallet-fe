import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IAuthState } from "interfaces"

const initialState: IAuthState = {
  error: null,
  loading: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAll(state) {
      Object.assign(state, initialState)
    },
  },
  extraReducers: (builder) => {
    //signUp
    // builder.addCase(signUp.pending, (state) => {
    //   state.loading = true
    //   state.isAuthenticated = false
    // })
    // builder.addCase(signUp.fulfilled, (state, { payload }) => {
    //   state.loading = false
    //   state.isAuthenticated = true
    // })
    // builder.addCase(signUp.rejected, (state, { payload }: PayloadAction<string>) => {
    //   state.loading = false
    //   state.isAuthenticated = false
    //   state.error = payload
    // })
  },
})
export const { resetAll } = authSlice.actions
export default authSlice.reducer
