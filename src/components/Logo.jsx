import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex justify-center items-center'>
      <img src="https://cdn-icons-png.flaticon.com/512/123/123729.png" alt="Blog" width={'50px'} className=' bg-gray-50'/>
      <h1 className='font-thin hidden md:block'>Blogify</h1>
    </div>
  )
}

export default Logo
