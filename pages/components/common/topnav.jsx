import Link from 'next/link'

export default function Topnav() {
    return (
        <div className='container bg-teal-100 grid place-items-center' style={{
            height: `10vh`
        }}>
            <div>
                <Link href='/dashboard' className='font-semibold p-2 text-xl'>Dashboard</Link>
                <Link href='/' className='font-semibold p-2 text-xl'>Home</Link>
            </div>
        </div >
    )
}
