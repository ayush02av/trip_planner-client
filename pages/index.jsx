import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (localStorage)
      setToken(localStorage.getItem('token'))
  })

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      axios.get('http://localhost:8000/api/profile', config)
        .then((res) => {
          setProfile(res.data.user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [token])

  return (
    <div>
      <h1>Home</h1>

      {profile && console.log(profile)}

      {
        (token && profile)
          ?
          (
            <div>
              <h2>Profile</h2>
              <b>Name:</b> {profile.name}
              <br />
              <b>Email:</b> {profile.email}
              <br />
              <br />
              <a href="/logout">Logout</a>
            </div>
          )
          :
          (
            <div><a href="/login">Login</a></div>
          )
      }
    </div>
  )
}
