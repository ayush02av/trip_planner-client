import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const serverTokenSlice = createSlice({
    name: 'serverToken',
    initialState,
    reducers: {
        setServerToken: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setServerToken } = serverTokenSlice.actions

export default serverTokenSlice.reducer