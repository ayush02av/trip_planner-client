import { useEffect } from 'react'

export default function Login() {

    useEffect(function () {
        window.location = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`
    })

    return null
}
