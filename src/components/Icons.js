import React from 'react'
import coin from "../images/coins.png";
import gift from "../images/gift.png";
import car from "../images/car.png";

function Icons
  () {
  return (
    <div className='bg-blue-900 items-center   '>
      <div className='  justify-around h-22 text-center  -translate-y-2/4   lg:flex grid  	'>
        <div className='bg-emerald-700 w-80 h-36   rounded-3xl pt-30 text-center font-center text-white mt-5'>
          <p className='ml-32 mt-8 lg:flex block'><img src={coin} alt='image not loading' /></p>
          <p>money back</p>


        </div>
        <div className='bg-emerald-700 w-80 h-36 rounded-3xl mt-5 text-center font-center text-white'>
          <p className='ml-32 mt-8 '><img src={gift} alt='image not loading' /></p>
          <p>Special gift</p>
        </div>
        <div className='bg-emerald-700 w-80 h-36 rounded-3xl mt-5 text-center font-center text-white'>
          <p className='ml-32 mt-8'><img src={car} alt='image not loading' /></p>
          <p>freeshiping</p>
        </div>
      </div>
      <div className='text-white justify-around mt-6 md:flex lg:flex block text-center'>
        <div className=' md:block lg:flex'>
          <div className='mt-6  ' >
            <h>INFORMATION</h>
            <p>There are many variations of passages<br />
              of Lorem Ipsum available, but the<br />
              majority have suffered alteration in<br />
              some form, by injected humour, or<br />
              randomised words which don't look <br />
              even slightly believable</p>

          </div>

          <div className='mt-6 ml-6 '>
            <h>INFORMATION</h>
            <p>There are many variations of passages<br />
              of Lorem Ipsum available, but the<br />
              majority have suffered alteration in<br />
              some form, by injected humour, or<br />
              randomised words which don't look <br />
              even slightly believable</p>
          </div>

        </div>
        <div className='lg:flex'>

          <div className='mt-6 ' >
            <h>INFORMATION</h>
            <p>There are many variations of passages<br />
              of Lorem Ipsum available, but the<br />
              majority have suffered alteration in<br />
              some form, by injected humour, or<br />
              randomised words which don't look <br />
              even slightly believable</p>
          </div>

          <div className='mt-6 ml-6' >
            <h>INFORMATION</h>
            <p>There are many variations of passages<br />
              of Lorem Ipsum available, but the<br />
              majority have suffered alteration in<br />
              some form, by injected humour, or<br />
              randomised words which don't look <br />
              even slightly believable</p>
          </div>

        </div>






      </div>



    </div>
  )
}

export default Icons
