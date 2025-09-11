"use client"

import React, { useState } from "react"
import { useAuth } from "@/context/AuthContext"

interface LoginFormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login } = useAuth()

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      login(data.user)
      console.log("LOGIN API RESPONSE:", data)

      if (!res.ok) throw new Error(data.message || "Login failed")

      setMessage(`✅ Welcome back, ${data.user.name}`)
      // Optional: redirect, set cookie, or save user info
    } catch (err: any) {
      setMessage(err.message || "❌ Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-2xl shadow-md w-full max-w-md'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium mb-1'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            className='w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400'
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className='text-center mt-4 text-sm'>{message}</p>}
      </form>
    </div>
  )
}

export default Login
