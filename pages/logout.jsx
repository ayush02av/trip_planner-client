import { useEffect } from 'react'

export default function Logout() {

    useEffect(function () {
        window.location = 'http://localhost:8000/auth/logout'
    })

    return (
        <></>
    )
}
