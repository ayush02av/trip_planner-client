import { useEffect } from 'react'

export default function Logout() {

    useEffect(function () {
        window.location = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`
    })

    return null
}
