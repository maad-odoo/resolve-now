import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-400">
      <div className=" max-w-[1200px] mx-auto text-sm h-[60px] flex items-center justify-between">
        <p>Logo</p>
        <div className='flex'>
          <p className='mr-2'>link</p>
          <p className='mr-2'>link</p>
          <p className='mr-2'>link</p>
          <p className='mr-2'>link</p>
        </div>
      </div>
    </nav>
  )
}
