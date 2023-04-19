import React from 'react'
import shoes from "../images/shoes.png";
import underwear from "../images/underwear.png";
import pent from "../images/pent.png";
import t_shart from "../images/t_shart.png";
import jakit from "../images/jakit.png";
import helbet from "../images/helbet.png";



function Garments() {
    return (
        

        <div className='  flex justify-around text-center  md:center    '>
            <div className='lg:flex md:grid sm:block'>

                <div className='bg-yellow-400 p-20 justify-around'>

                    <img src={shoes} className='h-20 ' />
                    <p className='text-white text-lg '>SHOES</p>

                </div>

                <div className='bg-blue-800 p-20 '>

                    <img src={underwear} className='h-20 ' />
                    <p className='text-white '>UNDERWEAR</p>

                </div>

                <div className='bg-yellow-400 p-20'>

                    <img src={pent} className='h-20 ' />
                    <p className='text-white text-lg'>PENTS </p>

                </div>
            </div>

            <div className='lg:flex md:grid sm:block justify-around'>

                <div className='bg-blue-800 p-20'>

                    <img src={t_shart} className='h-20 ' />
                    <p className='text-white text-lg'>t_shart </p>

                </div>

                <div className='bg-yellow-400 p-20'>

                    <img src={jakit} className='h-20 ' />
                    <p className='text-white text-lg'>jakit</p>

                </div>

                <div className='bg-blue-800 p-20'>

                    <img src={helbet} className='h-20 ' />
                    <p className='text-white text-lg'>helbet</p>

                </div>
            </div>


        </div>

    )
}

export default Garments