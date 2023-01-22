import Link from "next/link"

const menu = [
    {
        category: 'General',
        subMenu: [
            {
                title: 'Home',
                cta: '/dashboard'
            },
            {
                title: 'Profile',
                cta: '/dashboard/profile'
            }
        ]
    },
    {
        category: 'Groups',
        subMenu: [
            {
                title: 'All',
                cta: '/dashboard/groups'
            },
            {
                title: 'New'
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
    return (
        <div className='bg-teal-400 p-2 h-100'>
            {menu.map(menuItem => (
                <div className="mb-3">
                    <div className="text-lg">{menuItem.category}</div>
                    <div className="pl-5">
                        {menuItem.subMenu.map(subMenuItem => (
                            <div><Link href={subMenuItem.cta || ''}>{subMenuItem.title}</Link></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}