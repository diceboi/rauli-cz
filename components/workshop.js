import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'

export default function Workshop({ raulidata }) {
    return(
        <>
        <section id='workshop' className='h-screen lg:h-[60vh] flex'>
          <div className='w-11/12 lg:w-8/12 m-auto'>
            <h1 className='px-4 py-2 bg-[#e94e1b] w-fit text-5xl lg:text-8xl text-white'>{raulidata.workshopFocim}</h1>
            <h3 className='text-3xl my-6'>{raulidata.workshopAlcim}</h3>
            <button className=' bg-[#e94f1b00] border border-[#e94e1b] px-8 py-2 text-2xl'>
                <Link href="#fullblack" className='flex items-center'>{raulidata.workshopGomb} <BiChevronRight className='h-10 w-10'/></Link>
            </button>
          </div>
        </section>
        </>
    )
}