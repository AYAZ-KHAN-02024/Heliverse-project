import React from 'react'

function ApplyPage() {
  return (
    <div className=' flex flex-col align-middle justify-center'>
       <p className=' m-auto xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-slate-300 md:w-[40%] w-[85%] text-center mt-10'>Apply On Any Section Or Enable For Whole Page</p>
       
       <div className='flex flex-row  justify-center w-[85%] align-middle flex-wrap m-auto'>
         
         <div className=' flex flex-col justify-center md:mr-8 align-middle p-4 rounded-2xl
          border-[2px] border-slate-800 md:w-[45%] w-full  h-fit md:mt-12 mt-6 mb-6 bg-gradient-to-r  to-slate-900 from-[#1e0020]'>
            <p className=' xl:text-3xl lg:text-2xl md:text-xl text-lg m-3 font-bold '>Apply On Section</p>
            <p className='md:text-lg text-xs text-slate-400  m-3'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
            <img src="motionarteffect-img11.png" alt="img" />
         </div>
          
         <div className=' flex flex-col justify-center  align-middle p-4 rounded-2xl
          border-[2px] border-slate-800 md:w-[45%] w-full  h-fit md:mt-24 mb-6 bg-gradient-to-r  to-slate-900 from-[#1e0020]'>
            <p className=' xl:text-3xl lg:text-2xl md:text-xl text-lg m-3 font-bold '>Apply On Page</p>
            <p className='md:text-lg text-xs text-slate-400  m-3'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
            <img src="motionarteffect-img11.png" alt="img" />
         </div>
         
       </div>
    </div>
  )
}

export default ApplyPage
