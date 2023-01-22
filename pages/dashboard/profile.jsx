import DashboardLayout from './_layout'
import { useSelector } from 'react-redux'

const profileDisplayItems = [
    {
        title: 'Username',
        key: 'nickname'
    },
    {
        title: 'Email',
        key: 'email'
    },
]

export default function Profile() {
    const userProfile = useSelector(state => state.userProfile.value)

    return (
        (!userProfile) ? (<>loading</>) :
            <div>
                <div className="text-3xl font-bold mb-5">Profile</div>
                {profileDisplayItems.map((profileDisplayItem, index) => (
                    <div key={index}>
                        <span className="font-semibold">{profileDisplayItem.title}</span>
                        :&nbsp;
                        <span>{userProfile[profileDisplayItem.key]}</span>
                    </div>
                ))}
            </div >
    )
}

Profile.pageLayout = DashboardLayout