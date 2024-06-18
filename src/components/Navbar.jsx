import React from 'react'
import poweredBy from '../assets/PoweredBy.svg'

const Navbar = () => {
  return (
    <div className='p-2.5 px-6 flex justify-between'>
      <h2 className='text-xl font-semibold text-indigo-500'>Wealth<span className='text-black'>Grow</span></h2>
      <img src={poweredBy} alt="logo" />
    </div>
  )
}

export default Navbar