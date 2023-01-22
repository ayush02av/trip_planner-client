import { NextResponse } from "next/server"

export default function middleware(req) {
    const token = req.cookies.get('token')
    const url = req.nextUrl.clone()

    if (url.pathname.includes('dashboard')) {
        if (token == undefined) {
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()
}