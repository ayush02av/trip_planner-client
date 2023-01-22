import Topnav from '../components/common/topnav'
import Sidenav from '../components/dashboard/sidenav'

export default function DashboardLayout({ children }) {
    return (
        <>
            <Topnav />
            <div className="grid grid-cols-5 bg-red-50" style={{
                height: `90vh`
            }}>
                <Sidenav />
                <div className="col-span-3 p-5">{children}</div>
            </div>
        </>
    )
}