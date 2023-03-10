import axios from 'axios'
import { useDispatch } from 'react-redux'

import { getCookie } from '../utility/cookies'
import { useEffect, useState } from 'react'

import { setUserProfile } from '@/store/features/userProfileSlice'
import { setServerToken } from '@/store/features/serverTokenSlice'

export default function StoreMiddleware() {
    const dispatch = useDispatch()

    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(getCookie('token'))

        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            dispatch(setServerToken(token))

            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profile`, config)
                .then((res) => {
                    dispatch(setUserProfile(res.data.user))
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }, [token])

    return null
}
