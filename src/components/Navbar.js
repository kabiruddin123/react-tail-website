import React from 'react'

function Navbar() {
    return (
        <div className='bg-blue-900  align-center'>
            <ul className='block xl:flex lg:flex justify-center'>
                <li className='bg-yellow-400 p-6'><a href className=''>HOME</a></li>
                <li className='hover:bg-yellow-400 p-6'><a href className=''>ABOUT</a></li>
                <li className='hover:bg-yellow-400 p-6'><a href className=''>PRODUCTS</a></li>
                <li className='hover:bg-yellow-400 p-6'><a href className=''>FASION</a></li>
                <li className='hover:bg-yellow-400 p-6'><a href className=''>NEW</a></li>
                <li className='hover:bg-yellow-400 p-6 '><a href className=''>CONTACT US</a></li>
                
            <input className='bg-white-200  rounded-xl px-16 h-8 mt-5 mb-4   ' type="text" placeholder='Enter your email' />
            </ul>
        </div>
    )
}

export default Navbar