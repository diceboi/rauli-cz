import Image from "next/image"
import Link from "next/link"

import { FaPhoneAlt } from 'react-icons/fa'

export default function Footer({ raulidata }) {
    return(
        <>
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
        </>
    )
}