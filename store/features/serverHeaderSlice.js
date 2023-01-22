import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const serverHeaderSlice = createSlice({
    name: 'serverHeader',
    initialState,
    reducers: {
        setserverHeader: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setserverHeader } = serverHeaderSlice.actions

export default serverHeaderSlice.reducer