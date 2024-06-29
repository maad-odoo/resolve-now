"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react'

interface EventFormData {
  dateTime: string;
  place: string;
  violation: string;
  solution: string;
  witness: string;
}

export default function EventReportPage() {
  const [formData, setFormData] = useState<EventFormData>({
    dateTime: '',
    place: '',
    violation: '',
    solution: '',
    witness: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className='max-w-[800px] mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Event Report</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor="dateTime" className='block mb-1'>Date and Time of the Event:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor="place" className='block mb-1'>Place of the Event:</label>
          <textarea
            id="place"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            rows={3}
            required
          />
        </div>
        <div>
          <label htmlFor="violation" className='block mb-1'>Violation of Event:</label>
          <textarea
            id="violation"
            name="violation"
            value={formData.violation}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            rows={4}
            required
          />
        </div>
        <div>
          <label htmlFor="solution" className='block mb-1'>Proposed Solution:</label>
          <textarea
            id="solution"
            name="solution"
            value={formData.solution}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            rows={4}
            required
          />
        </div>
        <div>
          <label htmlFor="witness" className='block mb-1'>Witness (if possible):</label>
          <textarea
            id="witness"
            name="witness"
            value={formData.witness}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            rows={3}
          />
        </div>
        <button type="submit" className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Submit Report
        </button>
      </form>
    </div>
  )
}