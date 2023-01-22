import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setCookie, removeCookie } from '../utility/cookies'

export default function Handler() {
    const router = useRouter()

    useEffect(function () {
        if (router.query.token) {
            // window.localStorage.setItem('token', router.query.token)
            setCookie('token', router.query.token, 30)
            window.location = '/dashboard'
        } else if (router.query.logout) {
            removeCookie('token')
            window.location = '/'
        }
    })

    return null
}
