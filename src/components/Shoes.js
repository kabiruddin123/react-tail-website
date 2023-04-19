import React from 'react'
import shoes1 from "../images/shoes1.png";
import shoes2 from "../images/shoes2.png";
import shoes3 from "../images/shoes3.png";
import shoes4 from "../images/shoes4.png";
import shoes5 from "../images/shoes5.png";
import tisat1 from "../images/tisat1.png";
import tisat2 from "../images/tisat2.png";
import tisat3 from "../images/tisat3.png";
import tisat4 from "../images/tisat4.png";
import tisat5 from "../images/tisat5.png";
import mix1 from "../images/mix1.png";
import mix2 from "../images/mix2.png";
import mix3 from "../images/mix3.png";
import mix4 from "../images/mix4.png";
import mix5 from "../images/mix5.png";

function Shoes() {
  return (
    <div>
      <div>

        <div className='mt-10 '>
          <h1 className='text-4xl ml-16 '>Featured Products</h1>
          <div className='border-yellow-400 border-2 w-50 '></div>
        </div>

        <div className='block sm:grid justify-around text-center  md:center mt-16 m-32   '>
          <div className='lg:flex md:grid lg:gap-10 justify-around sm:block '>


            <div className='block sm:flex lg:gap-10 sm:text-lg sm:gap-14  '>
              
              <div>

                <img src={shoes1} className='bg-slate-300 rounded-lg m-auto sm:w-80 md:w-80 w-80 ' />
                <div className='mt-4 '>Short Openwork Cardigan<br />
                  $120.00
                </div>

              </div>

              <div>

                <img src={shoes2} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80 ' />
                <div className='mt-4'>Short Openwork Cardigan<br /> $120.00
                </div>

              </div>


            </div>
          


            <div className='block sm:flex lg:gap-10 sm:text-lg sm:gap-14 '>

              <div>

                <img src={shoes3} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>
              <div>

                <img src={shoes4} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>


            </div>

            <div className='block sm:flex lg:gap-10 sm:text-lg sm:gap-14 '>

              <div>

                <img src={shoes5} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan <br /> $120.00
                </div>

              </div>


              <div>
                <img src={tisat1} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>


            </div>
          </div>

          <div className='lg:flex md:grid lg:gap-10 justify-around sm:block'>

            <div className='block sm:flex lg:gap-10 sm:text-lg sm:gap-14  '>
              <div>

                <img src={tisat2} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>

              <div>

                <img src={tisat3} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>


            </div>


            <div className=' block sm:flex lg:gap-10 sm:text-lg sm:gap-14 '>

              <div>

                <img src={tisat4} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>
              <div>

                <img src={tisat5} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>



              


            </div>
            
            <div className='block sm:flex lg:gap-10 sm:text-lg sm:gap-14 '>

            <div>
                <img src={mix1} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80 ' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>

              <div>

                <img src={mix2} className='bg-slate-300 rounded-lg m-auto sm:w-80  md:w-80 w-80' />
                <div className='mt-4'>Short Openwork Cardigan<br />  $120.00
                </div>

              </div>


            </div>



          </div>
          <div className='justify-center lg:'>
            <button className=' text-white   w-40 h-10  bg-blue-900 hover:bg-yellow-400 sm:mt-12 mt-8 rounded-lg '> SEE MORE</button>

          </div>


        </div>

      </div>






    </div>


  )
}

export default Shoes