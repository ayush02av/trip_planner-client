import { useEffect } from 'react'

export default function Login() {

    useEffect(function () {
        window.location = 'http://localhost:8000/auth/login'
    })

    return (
        <></>
    )
}
