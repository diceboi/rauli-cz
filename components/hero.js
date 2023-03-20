import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { useState } from 'react'

import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineForm } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'


export default function Hero({ raulidata }) {

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        // Nyelvválasztó linkek
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
    
      // Popup nyitások zárások
      const [isOpen1, setIsOpen1] = useState(false);



    return (
<>
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

    <div className='grid grid-cols-2 bottom-2 fixed z-50 gap-4'>
        <button className=' bg-[#e94e1b] px-5 py-1 lg:px-8 lg:py-2 text-xl lg:text-3xl text-white'>
            <Link href="#workshop" className='flex justify-center items-center gap-2'><FaChalkboardTeacher className='h-6 w-6'/> Workshop</Link>
        </button>
        <button className=' bg-[#e94e1b] px-5 py-1 lg:px-8 lg:py-2 text-xl lg:text-3xl text-white '>
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
</>
)
}

