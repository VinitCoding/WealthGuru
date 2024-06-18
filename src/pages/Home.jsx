import React, { useState } from 'react'
import insurance_img from '../assets/Insurance.svg'
import FileUpload from '../components/FileUpload'

const Home = () => {

  const [showUpload, setShowUpload] = useState(true)

  const handleUpload = () => {
    setShowUpload(!showUpload)
  }
  return (
    <section className='w-full h-screen pt-8 '>
      {/*  */}
      <div className='flex justify-center pt-4 gap-x-16'>
        <img src={insurance_img} alt="insurance_image" className='w-[30%] mt-10' />
        <div className='mt-16'>
          <h2 className='text-[50px] text-white font-semibold w-[650px]'>Unlock Your Financial Potential with <span className='font-bold'>WealthGuru</span></h2>
          <p className='w-[600px] text-[20px] text-white'>Get personalized and comprehensive recommendations from your AI-powered companion.</p>
          <button className='px-4 py-2 mt-6 font-medium text-center text-white transition duration-75 ease-in rounded-md hover:shadow-lg bg-gradient-to-r from-teal-300 to-cyan-500 hover:shadow-white' onClick={handleUpload}>Try It Out!!</button>
        </div>
      </div>

      {/*  */}
      {
        showUpload && (
          <div>
            <FileUpload />
          </div>
        )
      }
    </section>
  )
}

export default Home