"use client"

import React, { useState } from "react"

interface SignUpFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  password: string
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
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
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Signup failed")

      setMessage(`✅ ${data.message}`)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        password: "",
      })
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
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up</h2>

        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          className='w-full border mb-3 rounded-lg px-3 py-2'
          required
        />

        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
          className='w-full border mb-3 rounded-lg px-3 py-2'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='w-full border mb-3 rounded-lg px-3 py-2'
          required
        />

        <input
          type='tel'
          name='phone'
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          className='w-full border mb-3 rounded-lg px-3 py-2'
          required
        />

        <input
          type='date'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
          className='w-full border mb-3 rounded-lg px-3 py-2'
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='w-full border mb-4 rounded-lg px-3 py-2'
          required
        />

        <button
          type='submit'
          disabled={loading}
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400'
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {message && <p className='text-center mt-4 text-sm'>{message}</p>}
      </form>
    </div>
  )
}

export default SignUp
