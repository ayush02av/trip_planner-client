import Link from "next/link"

const menu = [
    {
        category: 'General',
        subMenu: [
            {
                title: 'Home',
                cta: '/'
            },
            {
                title: 'Profile',
                cta: '/profile'
            }
        ]
    },
    {
        category: 'Groups',
        subMenu: [
            {
                title: 'All',
                cta: '/groups'
            },
            {
                title: 'New'
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
                            <div><Link href={subMenuItem.cta ? `/dashboard${subMenuItem.cta}` : ''}>{subMenuItem.title}</Link></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}