import Link from 'next/link'
import { useEffect, useState } from 'react'
import DashboardLayout from '../_layout'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function All() {
    const token = useSelector(state => state.serverToken.value)
    const [places, setPlaces] = useState(null)

    useEffect(() => {
        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/place/`, config)
                .then((res) => {
                    setPlaces(res.data.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [token])

    return (
        <div>
            <div className="text-3xl font-bold mb-5">All Places</div>
            <Link href='/dashboard/places/new' className='text-red-700'>Add a new place</Link>
            {places && places.map((place, index) => (
                <div key={index} className="m-3 p-3 bg-blue-400">
                    <div className="text-xl">{place.name}</div>
                    <div className="">Pincode: {place.pincode}</div>
                    <div className="">Google Map: {place.google_map_link}</div>
                </div>
            ))}
        </div >
    )
}

All.pageLayout = DashboardLayout