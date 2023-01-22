import { configureStore } from '@reduxjs/toolkit'

// features
import counterSlice from './features/counterSlice'
import userProfileSlice from './features/userProfileSlice'
import serverHeaderSlice from './features/serverHeaderSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        userProfile: userProfileSlice,
        serverHeader: serverHeaderSlice,
    },
})