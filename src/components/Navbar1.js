import React from 'react'

function Navbar1() {
  return (
    <header>

      <div className=''>
        <div className='flex justify-around p-2 bg-gray-200  bg-blue-800  md:flex hidden    '>

          
          <div className='flex  '>
            <p className=''><i class="fa-sharp fa-solid fa-phone mt-2"></i></p>
            <p className='ml-1  lg-text=5xl lg mt-2'>Call us: 0126 - 922 - 0162</p>
          </div>


          <div className='gap-5 justify-around flex text-2xl sm gap-3 mt-2 '>
            <p className='text-blue-600 '><i class="fa-brands fa-square-facebook"></i></p>
            <p className='text-blue-600'><i class="fa-brands fa-twitter"></i></p>
            <p className='text-blue-600'><i class="fa-brands fa-linkedin"></i></p>
            <p className='text-blue-600'><i class="fa-brands fa-square-instagram"></i></p>

          </div>


          <div className='flex '>
            <button className=' border-black-150  rounded-xl mr-3 bg-blue-200 w-32 justify-center h-7  md:flex hidden mt-2'>English</button>
            <p className='   md:flex hidden mt-2 '> Open hour: 8.00 - 18.00</p>

          </div>



        </div>
      </div>

      <div className=' flex justify-around p-7  ' >

        <div className='flex  md:flex hidden'>
          <p><i class="fa fa-envelope text-xl " aria-hidden="true"></i></p>
          <p className='ml-2 md:flex-hidden '>uddinkabir740@gmail.com</p>

        </div>

        <div className=' md:pl-8 md:text-4xl' >
          <h1 className='flex mr-5 text-3xl	'> <span className='text-yellow-400'>R</span> <span className='text-blue-900'>O</span><span className='text-yellow-400'>M</span><span className='text-blue-900'>O</span><span className='text-yellow-400'>F</span>
            <span className='text-blue-900'>I</span><span className='text-yellow-400'>Y</span><span className='text-blue-900'>I</span></h1>

        </div>
        <div className=' flex md:flex hidden'>
          <i class="fa fa-shopping-bag text-lg text-2xl " aria-hidden="true"></i>
          <button className='border-black-150  rounded-xl mr-3 bg-blue-200 w-32  text-mt-2 ml-5 md:w-28 '>
            Order now
          </button>
        </div>



 
      </div>

    </header>

  )
}

export default Navbar1