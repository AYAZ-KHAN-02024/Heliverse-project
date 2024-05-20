import React from 'react'

function Review() {
    return (
        <div className=' flex flex-col justify-center align-middle'>

            {/* 1 */}
            <p className='md:text-2xl font-medium md:mt-32 mt-28 m-auto text-center mb-8 '>
                Trusted by thousands of users around the world
            </p>

            {/* 2 */}
            <div className='w-[85%] md:mt-[4%]  mt-[2%] flex flex-row flex-wrap justify-between align-middle m-auto'>

                <div className=' flex flex-row flex-wrap align-middle text-start justify-center'>
                    <img src='motionarteffect-img2.png' className='m-2 w-20 '></img>
                    <div className=' flex flex-col justify-center align-middle'>
                        <img src='motionarteffect-img4.png' className=' mb-3'/>
                        <p >4.5 Score, 9 Reviews</p>
                    </div>
                </div>

                <div className=' flex flex-row flex-wrap align-middle text-start justify-center'>
                    <img src='motionarteffect-img1.png' className='m-2 w-20 '></img>
                    <div className=' flex flex-col justify-center align-middle'>
                        <img src='motionarteffect-img4.png' className=' mb-3'/>
                        <p >4.5 Score, 9 Reviews</p>
                    </div>
                </div>

                <div className=' flex flex-row flex-wrap align-middle text-start justify-center'>
                    <img src='motionarteffect-img3.png' className='m-2 w-20 '></img>
                    <div className=' flex flex-col justify-center align-middle'>
                        <img src='motionarteffect-img4.png' className=' mb-3'/>
                        <p >4.5 Score, 9 Reviews</p>
                    </div>
                </div>

            </div>

            {/* 3 */}
            <div className='w-[85%] m-auto flex-wrap flex flex-row  align-middle lg:justify-between  justify-center mt-[8%] mb-8'>
                <div className='md:w-[50%] w-[85%] flex flex-col justify-center text-start align-middle'>
                    <p className=' xl:text-4xl lg:text-3xl md:text-2xl text-xl  font-semibold xl:leading-[60px] w-full mb-8  text-center md:text-start'>
                        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                    </p>
                    <p className='md:text-start text-center lg:text-xl md:text-lg text-xs text-slate-400 md:w-[120%]'>
                        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                    </p>
                    <a  className=' bg-gradient-to-r  from-orange-500 to-purple-600 w-fit md:p-4 p-2 mt-4 m-auto md:m-0 text-white rounded-lg md:mt-6 text-xs md:text-base'>
                        Purchase From Envato →
                    </a>
                </div>

                <img src='motionarteffect-img5.png' className='self-center w-1/2 md:w-fit mt-6 md:mt-0 mr-10 md:mr-0'/>

            </div>

        </div>
    )
}

export default Review
