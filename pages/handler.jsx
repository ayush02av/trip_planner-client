import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Handler() {
    const router = useRouter()

    useEffect(function () {
        if (router.query.token) {
            window.localStorage.setItem('token', router.query.token)
            window.location = '/'
        } else if (router.query.logout) {
            window.localStorage.removeItem('token')
            window.location = '/'
        }
    })

    return (
        <></>
    )
}
