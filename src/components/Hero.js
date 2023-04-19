import React from 'react';
import ban from "../images/ban_img.png"

function Hero() {
    return (
        
            <div className='flex justify-around mt-34  '>

                <div className=' mt-5 text-center sm-text-center md:text-start sm-items-center m-32 '>
                    <p className='lg:text-8xl text-4xl text-blue-600 mt-10'>Romofyi</p>
                    <p className='lg:text-8xl text-4xl mt-5 text-yellow-400'>Trands 2045</p>
                    <p className='sm:text-4xl mt-5'>A huge fashion collection for ever</p>
                    <button className='bg-blue-900 mt-10 text-1xl text-white rounded-lg bg-blue-600 hover:bg-yellow-400 pl-5 pr-5 pt-3 pb-2'>SHOP NOW</button>
                </div>
                <div>
                    <img src={ban} className='h-96 mt-12 w-80  hidden md:block ' />

                </div>


            </div>
        
    )
}

export default Hero