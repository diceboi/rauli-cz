import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import client from '../apollo-client'
import { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineForm } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

import { gql } from "@apollo/client";

import { RAULI_CZ } from '@/lib/queries'

export default function Home({ raulidata }) {

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    // Navigate to the selected page
    if (selectedValue === 'Hun') {
      Router.push('http://rauli.hu');
    } else if (selectedValue === 'Ger') {
      Router.push('http://rauli.de');
    } else if (selectedValue === 'En') {
      Router.push('http://rauli.eu');
    } else if (selectedValue === 'Sk') {
      Router.push('http://rauli.sk');
    } else if (selectedValue === 'Cz') {
      Router.push('http://rauli.cz');
    } 
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <Head>
        <title>Rauli Maďarsko</title>
        <meta name="description" content="exkluzivní, inovativní, finská nosná konstrukce fotovoltaických panelů" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://rauli.hu/wp-content/uploads/2022/05/rauli-favicon.png" />
      </Head>
      <main>
        <section id='hero' className="flex justify-center items-center bg-neutral-900 h-screen lg:bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url("${raulidata.heroHatter.sourceUrl}")`}}>
          <div className='flex absolute top-5 right-5 text-xl gap-4'>
            <p className='text-white'>Language</p>
            <select name="Languages" onChange={handleSelect}>
              <option value="" className="cursor-pointer">Select Language</option>
              <option value="Hun" className="cursor-pointer">Hungarian</option>
              <option value="Ger" className="cursor-pointer">German</option>
              <option value="En" className="cursor-pointer">English</option>
              <option value="Sk" className="cursor-pointer">Slovak</option>
              <option value="Cz" className="cursor-pointer">Czech</option>
            </select>
          </div>

          <div className='flex bottom-2 right-2 gap-2 fixed z-50 overflow-hidden'>
            <button className=' bg-[#e94e1b] px-5 py-1 lg:px-8 lg:py-2 text-xl lg:text-3xl text-white fix'>
              <Link href="#workshop" className='flex justify-center items-center gap-2'><FaChalkboardTeacher className='h-6 w-6'/> Workshop</Link>
            </button>
            <button className=' bg-[#e94e1b] px-5 py-1 lg:px-8 lg:py-2 text-xl lg:text-3xl text-white fix'>
              <Link href="#contact" className='flex justify-center items-center gap-2'><AiOutlineForm className='h-6 w-6'/> Contact</Link>
            </button>
          </div>

          <div className='flex justify-center items-center '>
            <div className='flex flex-col gap-4 border-l-8 border-[#e94e1b] text-white capitalize w-11/12 lg:w-3/5 px-4'>
              <Image src={raulidata.rauliLogo.sourceUrl} width={150} height={100}/>
              <h1 className='text-5xl lg:text-8xl'>{raulidata.focim}</h1>
              <h2 className='text-xl lg:text-4xl'>{raulidata.alcim}</h2>
              <div className='flex gap-4'>
                <button className=' bg-[#e94e1b] px-8 py-2 text-xl lg:text-3xl'>
                  <Link href="#fullblack">{raulidata.ctaBovebben}</Link>
                </button>
                <button onClick={() => setIsOpen1(true)} className=' bg-[#e94f1b00] border border-[#e94e1b] px-4 py-1 lg:px-8 lg:py-2 text-lg lg:text-2xl'>
                  {raulidata.ctaVideo}
                </button>
              </div>
            </div>
          </div>
          {isOpen1 &&(
          <div className='fixed flex justify-center items-center w-full h-screen bg-[#000000d0] z-[999]'>
            <button className='absolute top-2 right-2' onClick={() => setIsOpen1(false)}><GrClose color="#fff" className=' w-8 h-8 bg-white'/></button>
            <iframe width="75%" height="50%" src={raulidata.mediatar1Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          )}
        </section>
        
        <nav className='sticky flex justify-center top-0 z-50 w-full bg-[#e94e1b]'>
          <ul className='grid grid-cols-5 grid-wrap gap-0 lg:justify-center text-md lg:text-3xl text-white cursor-pointer lg:w-8/12'>
            <Link href="#fullblack" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/fullblack-icon.svg" width={30} height={30}/>{raulidata.fullBlackBtn}</li></Link>
            <Link href="#easyclick" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/easyclick-icon.svg" width={30} height={30}/>{raulidata.easyclickBtn}</li></Link>
            <Link href="#warranty" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/warranty-icon.svg" width={30} height={30}/>{raulidata.garanciaBtn}</li></Link>
            <Link href="#media" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/media-icon.svg" width={30} height={30}/>{raulidata.mediatarBtn}</li></Link>
            <Link href="#extra" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/extra-icon.svg" width={30} height={30}/>{raulidata.extraBtn}</li></Link>
          </ul>
        </nav>

        <section id='fullblack' className='w-full h-auto'>
          <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2'>
            <div className="relative col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 w-full h-auto bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url("${raulidata.fullblack1kep.sourceUrl}")`}}>
              <div className='text-right absolute right-0 bottom-0 p-4 text-white lg:w-4/5'>
                <h1 className='text-5xl lg:text-8xl'>{raulidata.fullblackSectionFocim}</h1>
                <h2 className='text-xl lg:text-4xl'>{raulidata.fullblackSectionAlcim}</h2>
              </div>
            </div>
            <Image className='col-span-1 row-span-1 w-full h-full' src={raulidata.fullblack2kep.sourceUrl} width={1440} height={960}></Image>
            <Image className='col-span-1 row-span-1 w-full h-full' src={raulidata.fullblack3kep.sourceUrl} width={1440} height={960}></Image>
          </div>

          <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2'>
            <Image className='col-span-1 row-span-1 w-full h-full' src={raulidata.fullblack4kep.sourceUrl} width={1440} height={960}></Image>
            
            <div className="relative col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 w-full h-auto bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url("${raulidata.fullblack5kep.sourceUrl}")`}}>
              
            </div>
            
            <Image className='col-span-1 row-span-1 w-full h-full' src={raulidata.fullblack6kep.sourceUrl} width={1440} height={960}></Image>
            
          </div>
        </section>

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

        <section id='warranty' className='flex justify-center items-center h-screen w-11/12 lg:w-8/12 m-auto py-12'>
          <div className='grid grid-cols-1 grid-rows-1 lg:grid-row-1 lg:grid-cols-2 gap-16'>
            <div className='col-span-1 text-5xl lg:text-8xl text-white'>
              <h1 className='px-4 py-2 bg-[#e94e1b] w-fit'>{raulidata.garanciaSzoveg}</h1>
            </div>

            <div className='flex flex-col col-span-1 align-middle justify-center items-center'>
              <h1 className='text-8xl font-black text-[#e94e1b]'>{raulidata.evek}</h1>
              <h2 className='text-5xl'>{raulidata.garancia}</h2>
            </div>

          </div>
        </section>

        <section id='media' className='mx-auto w-11/12 lg:w-8/12 mb-40'> 
          <h1 className='text-5xl lg:text-8xl text-white px-4 pt-2 mb-6 bg-[#e94e1b] w-fit'>{raulidata.mediatarCim}</h1>
          <div className='grid grid-cols-1 grid-rows-3 gap-6 items-end'>
            
            
            <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src={raulidata.mediatar1Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar2Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar3Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src={raulidata.mediatar4Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar5Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar6Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src={raulidata.mediatar7Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar8Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src={raulidata.mediatar9Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
          </div>
        </section>

        <section id='extra' className='bg-neutral-900'>
          <div className='flex flex-col justify-center items-center w-11/12 lg:w-8/12 min-w-min mx-auto py-36'>
            <h1 className='text-5xl lg:text-8xl text-white text-center'>{raulidata.extraFocim}</h1>
            <h2 className='text-3xl lg:text-8xl text-[#e94e1b] text-center'>{raulidata.extraAlcim}</h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 1), rgba(23, 23, 23, 0.9)), url("${raulidata.extraElsoSzakaszHatter.sourceUrl}")`} } >
            <Image src={raulidata.extraElsoSzakaszKep.sourceUrl} width={400} height={200} className="col-span-1 justify-self-center lg:justify-self-end z-10 mr-0 lg:-mr-20 w-2/3 lg:w-96"/>
            <p className='col-span-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-start py-6 px-4'>{raulidata.extraElsoSzakaszSzoveg}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url("${raulidata.extraMasodikSzakaszHatter.sourceUrl}")`} } >
            <Image src={raulidata.extraMasodikSzakaszKep.sourceUrl} width={400} height={400} className="col-span-1 lg:justify-self-start justify-self-center z-10 mr-0 lg:-ml-20 w-2/3 lg:w-96"/>
            <p className='col-span-1 lg:-order-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-end py-6 px-4 '>{raulidata.extraMasodikSzakaszSzoveg}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url("${raulidata.extraHarmadikSzakaszHatter.sourceUrl}")`} } >
            <Image src={raulidata.extraHarmadikSzakaszKep.sourceUrl} width={400} height={200} className="col-span-1 justify-self-center lg:justify-self-end z-10 mr-0 lg:-mr-20 w-2/3 lg:w-96"/>
            <p className='col-span-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-start py-6 px-4'>{raulidata.extraHarmadikSzakaszSzoveg}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url("${raulidata.extraNegyedikSzakaszHatter.sourceUrl}")`} } >
            <Image src={raulidata.extraNegyedikSzakaszKep.sourceUrl} width={400} height={200} className="col-span-1 lg:justify-self-start justify-self-center z-10 mr-0 lg:-ml-16 w-2/3 lg:w-96"/>
            <p className='col-span-1 lg:-order-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-end py-6 px-4 '>{raulidata.extraNegyedikSzakaszSzoveg}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url("${raulidata.extraOtodikSzakaszHatter.sourceUrl}")`} } >
            <Image src={raulidata.extraOtodikSzakaszKep.sourceUrl} width={400} height={200} className="col-span-1 justify-self-center lg:justify-self-end z-10 mr-0 lg:-mr-20 w-2/3 lg:w-96"/>
            <p className='col-span-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-start py-6 px-4 '>{raulidata.extraOtodikSzakaszSzoveg}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center align-middle h-[60vh] overflow-hidden bg-center bg-no-repeat bg-cover bg-fixed backdrop-blur-lg' style={{backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.9), rgba(23, 23, 23, 0.9)), url("${raulidata.extraHatodikSzakaszHatter.sourceUrl}")`} } >    
          <Image src={raulidata.extraHatodikSzakaszKep.sourceUrl} width={400} height={200} className="col-span-1 lg:justify-self-start justify-self-center z-10 mr-0 lg:-ml-20 w-2/3 lg:w-96 opacity-10"/>
            <p className='col-span-1 lg:-order-1 text-xl lg:text-3xl text-white text-center border border-[#ffffff2a] bg-neutral-900 w-11/12 lg:w-3/6 justify-self-center lg:mb-0 mb-12 lg:justify-self-end py-6 px-4 '>{raulidata.extraHatodikSzakaszSzoveg}</p>
          </div>

        </section>

        <section id='workshop' className='h-screen lg:h-[60vh] flex'>
          <div className='w-11/12 lg:w-8/12 m-auto'>
            <h1 className='px-4 py-2 bg-[#e94e1b] w-fit text-5xl lg:text-8xl text-white'>{raulidata.workshopFocim}</h1>
            <h3 className='text-3xl my-6'>{raulidata.workshopAlcim}</h3>
            <button className=' bg-[#e94f1b00] border border-[#e94e1b] px-8 py-2 text-2xl'>
                <Link href="#fullblack" className='flex items-center'>{raulidata.workshopGomb} <BiChevronRight className='h-10 w-10'/></Link>
            </button>
          </div>
        </section>

        <section id='contact' className='lg:h-screen'>
          <div className='w-11/12 lg:w-8/12 flex-col m-auto'>
            <h1 className=' px-4 py-2 bg-[#e94e1b] w-fit text-5xl lg:text-8xl text-white'>{raulidata.irjNekunkFocim}</h1>
              <form className='grid grid-cols-1 grid-rows-10 gap-4 my-6'>
                <div className='row-span-1 flex flex-col'>
                  <label className='text-2xl'>{raulidata.irjNekunkVezeteknev} <span className=' text-red-700'>*</span></label>
                  <input className=' border border-[#e94e1b] p-2' type="text" id='lastname' />
                </div>
                <div className='row-span-1 flex flex-col '>
                  <label className='text-2xl'>{raulidata.irjNekunkKeresztnev} <span className=' text-red-700'>*</span></label>
                  <input className=' border border-[#e94e1b] p-2' type="text" id='firstname' />
                </div>
                <div className='row-span-1 flex flex-col '>
                  <label className='text-2xl'>{raulidata.irjNekunkEmail} <span className=' text-red-700'>*</span></label>
                  <input className=' border border-[#e94e1b] p-2' type="email" id='email' />
                </div>
                <div className='row-span-6 flex flex-col '>
                  <label className='text-2xl'>{raulidata.irjNekunkRovidUzenet} <span className=' text-red-700'>*</span></label>
                  <textarea className=' border border-[#e94e1b] p-2' rows="10" id='lastname' />
                </div>
                <div className='row-span-1 flex flex-col w-fit'>
                  <input type="submit" className=' bg-[#e94e1b] border border-[#e94e1b] px-8 py-2 text-2xl text-white cursor-pointer'/>  
                </div>
              </form>
          </div>
        </section>

        <section id='footer' className=' bg-neutral-900'>
          <div className='w-11/12 lg:w-8/12 m-auto grid grid-cols-1 lg:grid-cols-3 py-6 justify-center items-center'>
            <div className='relative col-span-1 flex flex-col justify-center items-center text-center text-white'>
              <h3 className='text-xl z-10'>{raulidata.footerRendeles}</h3>
              <p className=' tracking-widest z-10'>{raulidata.footerRendelesNev}</p>
              <p className=' text-2xl mb-6 z-10'>{raulidata.footerRendelesTelefonszam}</p>
              <h3 className='text-xl z-10' >{raulidata.footerTovabbiInformacio}</h3>
              <p className=' tracking-widest z-10'>{raulidata.footerTovabbiInformacioNev}</p>
              <p className=' text-2xl mb-6 z-10'>{raulidata.footerTovabbiInformacioTelefonszam}</p>
              <FaPhoneAlt className='absolute h-full w-auto opacity-10 z-0'/>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center py-4'>
              <Image src={raulidata.footerKep.sourceUrl} width={500} height={500} />
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center ml-0 lg:ml-24 gap-6'>
              <Link href="https://profigreentech.hu"><Image src={raulidata.footer1Logo.sourceUrl} width={110} height={100}/></Link>
              <Link href=""><Image src={raulidata.footer2Logo.sourceUrl} width={150} height={100}/></Link>
              <Link href="https://fullblack.hu"><Image src={raulidata.footer3Logo.sourceUrl} width={260} height={100}/></Link>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center w-full bg-[#e94e1b] py-6'>
            <h3 className='text-white text-md lg:text-xl w-11/12 text-center'>{raulidata.footerNarancsElsoSzoveg}</h3>
            <ul className='flex flex-wrap gap-2 text-white text-sm tracking-widest w-11/12 lg:w-6/12 justify-center lg:justify-evenly'>
              <li>{raulidata.footerNarancsOrszagok}</li>
            </ul>
            <Link className='text-white opacity-50 underline text-md pb-24 lg:pb-0' href="/adatkezelesi-nyilatkozat" >{raulidata.footerNarancsAdatkezelesiNyilatkozat}</Link>

          </div>

        </section>

      </main>
    </>
  )
}


export async function getStaticProps() {
  const { data:RauliCzData } = await client.query({ query: RAULI_CZ });
  const raulidata = RauliCzData.pages.nodes[0].rauliMain;

  return {
    props: {
      raulidata
    },
    revalidate: 5,
  };

}