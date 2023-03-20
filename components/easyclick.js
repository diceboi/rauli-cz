import Image from "next/image"
import { useState } from "react";

import { BsCircleFill } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'




export default function Easyclick({ raulidata }) {

    const [isOpen3, setIsOpen3] = useState(false);

    return(
        <>
        <section id='easyclick' className='border-t-8 border-[#e94e1b]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 bg-neutral-900'>
            <div className='relative w-full h-auto col-span-1 lg:col-span-2'>
              <div className='w-full h-full z-10 absolute'>
                <div id='circle-telescopic' className='group h-12 w-12 absolute top-[25%] left-[40%] cursor-pointer'><BsCircleFill data-tooltip-target="tooltip-light" data-tooltip-style="light" className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b]'/><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b] animate-ping'/>
                <div class=" w-auto opacity-0 bg-black text-white text-center absolute text-md lg:text-xl py-2 z-10 group-hover:opacity-100 mr-8 lg:ml-14 px-3 pointer-events-none">
                {raulidata.fullblackHotspotTeleszkop}
                </div>
                </div>

                <div id='circle-quality' className='group cursor-pointer absolute top-[50%] left-[39%]'><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b]'/><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b] animate-ping'/>
                
                <div class=" w-auto opacity-0 bg-black text-white text-center absolute text-md lg:text-xl py-2 z-10 group-hover:opacity-100 mr-8 lg:ml-14 px-3 pointer-events-none">
                {raulidata.fullblackHotspotSkandinav}
                </div>
                
                </div>
                <div id='circle-steel' className='group cursor-pointer absolute top-[40%] left-[55%]'><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b]'/><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b] animate-ping'/>
                
                <div class=" w-auto opacity-0 bg-black text-white text-center absolute text-md lg:text-xl py-2 z-10 group-hover:opacity-100 mr-8 lg:ml-14 px-3 pointer-events-none">
                {raulidata.fullblackHotspotNagySzilardsag}
                </div>
                
                </div>
                <div id='circle-precision' className='group cursor-pointer absolute top-[35%] left-[75%]'><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b]'/><BsCircleFill className='absolute h-4 w-4 lg:h-8 lg:w-8 text-[#e94e1b] animate-ping'/>
                
                <div class=" w-auto opacity-0 bg-black text-white text-center absolute text-md lg:text-xl py-2 z-10 group-hover:opacity-100 mr-48 lg:mr-48 px-3 pointer-events-none">
                {raulidata.fullblackHotspotPrecizios}
                </div>
                
                </div>
              </div>  
              <Image src={raulidata.fullblackHotspotKep.sourceUrl} width={1440} height={960} className="w-full h-auto"/>
              
            </div>
            <div className='flex flex-col gap-4 col-span-1 bg-neutral-900 justify-center items-center py-12'>
              <button onClick={() => setIsOpen3(true)} className='bg-[#e94f1b00] border border-[#e94e1b] px-8 py-2 text-2xl text-white my-6'>
                {raulidata.fullblackHotspotYoutubeGomb}
              </button>

              {isOpen3 && (
              <div className='fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-[#000000d0] z-[998]'>
                <button className='absolute top-2 right-2' onClick={() => setIsOpen3(false)}><GrClose color="#fff" className='w-8 h-8 bg-white'/></button>
                <iframe width="75%" height="50%" src={raulidata.fullblackHotspotYoutubeVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              )}

              <h2 className='text-white text-5xl' >{raulidata.fullblackHotspotFocim}</h2>
              <p className='text-white text-xl' >{raulidata.fullblackHotspotAlcim1}</p>
              <p className='text-white text-xl' >{raulidata.fullblackHotspotAlcim2}</p>
              <p className='text-white text-xl' >{raulidata.fullblackHotspotAlcim3}</p>
            </div>
          </div>

          
        </section>
        </>
    )
}