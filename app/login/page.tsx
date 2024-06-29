"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react'

type Role = 'employee' | 'hr' | 'admin'

interface FormData {
  fullName: string
  email: string
  jobId: string
  designation: string
  role: Role
  password: string
  jobIdOrEmail: string
}

export default function Page() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    jobId: '',
    designation: '',
    role: 'employee',
    password: '',
    jobIdOrEmail: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Regular login:', formData)
    // Here you would typically send the data to your backend
  }

  const handleGuestLogin = (role: Role) => {
    console.log(`Guest login as ${role}`)
    // Here you would typically handle the guest login process for the specific role
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setFormData({
      fullName: '',
      email: '',
      jobId: '',
      designation: '',
      role: 'employee',
      password: '',
      jobIdOrEmail: ''
    })
  }

  return (
    <div className='max-w-[1200px] mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {!isLogin && (
          <>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className='w-full p-2 border rounded'
              required
            />
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="Designation"
              className='w-full p-2 border rounded'
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className='w-full p-2 border rounded'
              required
            >
              <option value="employee">Employee</option>
              <option value="hr">HR</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        <input
          type="text"
          name={isLogin ? "jobIdOrEmail" : "jobId"}
          value={isLogin ? formData.jobIdOrEmail : formData.jobId}
          onChange={handleInputChange}
          placeholder={isLogin ? "Job ID or Email" : "Job ID"}
          className='w-full p-2 border rounded'
          required
        />
        {!isLogin && (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className='w-full p-2 border rounded'
            required
          />
        )}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className='w-full p-2 border rounded'
          required
        />
        <button type="submit" className='w-full p-2 bg-blue-500 text-white rounded'>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      {isLogin && (
        <div className='mt-4 space-y-2'>
          <p className='text-center font-bold'>Guest Login</p>
          <div className='flex space-x-2'>
            <button 
              onClick={() => handleGuestLogin('employee')} 
              className='flex-1 p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300'
            >
              Guest Employee
            </button>
            <button 
              onClick={() => handleGuestLogin('hr')} 
              className='flex-1 p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300'
            >
              Guest HR
            </button>
            <button 
              onClick={() => handleGuestLogin('admin')} 
              className='flex-1 p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300'
            >
              Guest Admin
            </button>
          </div>
        </div>
      )}
      <p className='mt-4 text-center'>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm} className='text-blue-500'>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  )
}