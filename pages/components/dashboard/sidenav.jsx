import Link from "next/link"
import { useRouter } from "next/router"

const menu = [
    {
        category: 'General',
        subMenu: [
            {
                title: 'Home',
                cta: '/dashboard'
            },
            {
                title: 'My Profile',
                cta: '/dashboard/profile'
            }
        ]
    },
    {
        category: 'Trip',
        subMenu: [
            {
                title: 'All Trips',
                cta: '/dashboard/trips/all'
            },
            {
                title: 'Plan a new trip',
                cta: '/dashboard/trips/new'
            }
        ]
    },
    {
        category: 'Preferences',
        subMenu: [
            {
                title: 'My Places',
                cta: '/dashboard/places/all'
            },
            {
                title: 'My Calendar',
            }
        ]
    },
    {
        category: 'Settings',
        subMenu: [
            {
                title: 'Logout',
                cta: '/logout'
            }
        ]
    }
]

export default function Sidenav() {
    const router = useRouter()

    return (
        <div className='bg-teal-400 p-2 h-100'>
            {menu.map((menuItem, index) => (
                <div key={index} className="mb-3">
                    <div className="text-xl">{menuItem.category}</div>
                    <div className="pl-5">
                        {menuItem.subMenu.map((subMenuItem, index) => (
                            <div key={index} className='m-3'>
                                <Link
                                    className={`
                                    ${router.pathname == subMenuItem.cta ? 'bg-red-200' : 'bg-red-50'}
                                    hover:bg-red-100
                                    px-3 py-1
                                    `}
                                    href={subMenuItem.cta || ''}
                                >{subMenuItem.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}