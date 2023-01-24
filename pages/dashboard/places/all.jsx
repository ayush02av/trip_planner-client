import Link from 'next/link'
import DashboardLayout from '../_layout'

export default function All() {
    return (
        <div>
            <div className="text-3xl font-bold mb-5">All Places</div>
            <Link href='/dashboard/places/new' className='text-red-700'>Add a new place</Link>
        </div >
    )
}

All.pageLayout = DashboardLayout