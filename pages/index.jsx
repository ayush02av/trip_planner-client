import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <h1 className="text-4xl">Home</h1>
      <br />
      <Link href='/dashboard'>Dashboard</Link>
    </div >
  )
}
