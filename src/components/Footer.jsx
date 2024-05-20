import React from 'react'

function Footer() {
  return (
    <footer className='bg-gradient-to-r  from-orange-600 to-purple-800 flex flex-row md:justify-between align-middle p-2 flex-wrap justify-center text-xs md:text-base'>
      <div className=' text-slate-900'>
       &copy; {new Date().getFullYear()} Copywrite. All rights reserved by Ayaz.Khan
      </div>
      <div className=' md:mt-0 mt-4'>
        <a className='mr-4   p-1 rounded-md'>Documentation</a>
        <a className='  p-1 rounded-md'>Support</a>
      </div>
    </footer>
  )
}

export default Footer
