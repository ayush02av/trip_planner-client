import { useState } from 'react'
import DashboardLayout from '../_layout'

export default function New() {
    const [form, setForm] = useState({
        name: null,
        pincode: null,
        google_map_link: null
    })

    const inputHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">Add New Place</div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium focus:outline-none">Name of the place *</label>
                    <input type="text" name="name" id="name" onChange={inputHandler} value={form.name || ""} className="border text-sm rounded-lg block w-full focus:outline-none p-2.5" placeholder="Majnu ka tila..." required autoComplete='off' />
                </div>
                <div>
                    <label htmlFor="pincode" className="block mb-2 text-sm font-medium focus:outline-none">Pincode *</label>
                    <input type="number" name="pincode" id="pincode" onChange={inputHandler} value={form.pincode || ""} className="border text-sm rounded-lg block w-full focus:outline-none p-2.5" placeholder="110054" required autoComplete='off' />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="google_map_link" className="block mb-2 text-sm font-medium focus:outline-none">Google map link *</label>
                    <textarea type="text" name="google_map_link" id="google_map_link" onChange={inputHandler} value={form.google_map_link || ""} className="border text-sm rounded-lg block w-full focus:outline-none p-2.5" placeholder="https://www.google.com/maps?q=majnu+ka+tila" required autoComplete='off' />
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div >
    )
}

New.pageLayout = DashboardLayout