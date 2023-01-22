import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserProfile } = userProfileSlice.actions

export default userProfileSlice.reducer