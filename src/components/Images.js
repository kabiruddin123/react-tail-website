import React from 'react'
import pic1 from "../images/news_img1.jpg";
import photo2 from "../images/news_img2.jpg";
import img3 from "../images/news_img3.jpg";

function Images() {
    return (
        <div>


            <div>
                <h1 className='text-3xl mt-16 ml-6'>Letest News</h1>
                <div className='border-yellow-400 border-2 w-174'></div>
            </div>

            <div>

                <div className=' m-10 md:flex sm:block '>
                    <div className=' '>
                        <img className='m-auto' src={pic1} />
                    </div>
                    <div className='md:ml-10'>
                        <h1 className='font-bold text-2xl m-4'>Specimen book. It has survived not only five</h1>

                        <div className='flex justify-between m-8 '>

                            <p>7 July 2045</p>
                            <p>LikeComment</p>

                        </div>
                        <p className='m-4 m-auto'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
                            Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,
                            when an unknown printer took a <br />galley of type and scrambled it to make a type specimen book.
                        </p>

                    </div>

                </div>

                <div className='  m-10 md:flex sm:block'>

                    <div >
                        <img className='m-auto' src={photo2} />
                    </div>
                    <div className='md:ml-10'>
                        <h1 className='font-bold text-2xl m-4'>Specimen book. It has survived not only five</h1>

                        <div className='flex justify-between mt-8'>

                            <p>7 July 2045</p>
                            <p>LikeComment</p>

                        </div>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
                            Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,
                            when an unknown printer took a <br />galley of type and scrambled it to make a type specimen book.
                        </p>

                    </div>

                </div>

                <div className='m-10 md:flex sm:block'>

                    <div>
                        <img className='m-auto' src={img3} />
                    </div>
                    <div className='md:ml-10'>
                        <h1 className='font-bold text-2xl m-4'>Specimen book. It has survived not only five</h1>

                        <div className='flex justify-between mt-8'>

                            <p>7 July 2045</p>
                            <p>LikeComment</p>

                        </div>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
                            Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,
                            when an unknown printer took a <br />galley of type and scrambled it to make a type specimen book.
                        </p>

                    </div>



                </div>
                <h1 className='text-bolt md:text-3xl   text-3xl ml-4  mt-10'>Subscribe To The Newsletter</h1>
                <div className='h-96 mt-10  '>

                    <div className=' mt-16   justify-end text-white grid   '>

                        <input className='bg-gray-200  w-96  h-12   rounded-lg text-xl   ' type="text" placeholder='enter your email' />
                        <button className=' text-white justify-end  w-40 h-10  bg-blue-900 hover:bg-yellow-400 mt-6 rounded-lg ml-40'> Subscribe</button>

                    </div>




                </div>

            </div>









        </div>
    )
}

export default Images