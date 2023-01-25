import { configureStore } from '@reduxjs/toolkit'

// features
import userProfileSlice from './features/userProfileSlice'
import serverTokenSlice from './features/serverTokenSlice'

export const store = configureStore({
    reducer: {
        userProfile: userProfileSlice,
        serverToken: serverTokenSlice,
    },
})