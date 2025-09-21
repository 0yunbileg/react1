"use client"
import { useAuth } from "@/context/AuthContext"

const Profile = () => {
  const { loggedIn, user, logout } = useAuth()

  if (!loggedIn) return <p>Please log in to see your profile.</p>

  return (
    <div>
      <h2>
        Welcome, {user?.firstName} {user?.lastName}
      </h2>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Date of Birth: {user?.dateOfBirth}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
