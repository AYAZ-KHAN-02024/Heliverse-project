import React from 'react'
import Review from './Review'
import ApplyPage from './ApplyPage'
import Browsers from './Browsers'
import LastPage from './LastPage'
import Footer from './Footer'

function Home() {
  return (
    <div className=' mt-14'>
      <div className=' relative top-6 m-auto flex flex-row w-[85%]  justify-between align-middle'>
        <img src="MotionArtEffect-logo.png" alt="img" className='md:w-fit w-32' />
        <a className="lg:p-4 p-2 lg:text-base text-xs self-center md:font-semibold  bg-white text-black rounded-md">Purchase Now</a>
      </div>

      <div className=' relative md:top-6 top-4 m-auto mt-10 flex flex-row flex-wrap justify-center self-start w-[85%]'>

        <div className='gap-x-1 flex md:flex-col flex-row m-auto md:m-0 md:text-xl text-xs'>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 font-semibold  ">Transform</h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 to-purple-600 font-semibold ">Your Website</h1>
          <h1 className="  text-white md:mt-4 md:w-28 text-wrap">With Motion Art Effect</h1>
        </div>

        <div className="md:w-[50%]  xl:ml-[15%] xl:mr-[20%] lg:ml-[16%] lg:mr-[11%] md:ml-[10%] md:mr-[5%] ml-0  self-center p-4  bg-transparent text-slate-100 rounded-md">
          <h1 className='xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-medium mb-2 xl:leading-[85px] text-center md:text-start '>Attract Your Visitors Attention With Colorful</h1>
          <h1 className='text-center md:text-start  lg:text-6xl md:text-4xl text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 to-purple-600 mb-2'>Motion Art Effect</h1>
          <p className='text-center md:text-start  md:text-xl text-lg font-thin lg:mt-14 text-slate-400'>
            Unleash the power of creativity with Motion Art for Elementor  your ultimate solution for seamlessly integrating captivating animations into your website.
          </p>
        </div>
      </div>

      <Review />
      <ApplyPage />
      <Browsers />
      <LastPage />
      <Footer />
    </div>
  )
}

export default Home
