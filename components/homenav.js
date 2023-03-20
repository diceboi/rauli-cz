import Image from "next/image"
import Link from "next/link"

export default function HomeNav({ raulidata }) {
    return(
        <>
            <nav className='sticky top-0 flex justify-center z-50 w-full bg-[#e94e1b]'>
                <ul className='grid grid-cols-5 grid-wrap gap-0 lg:justify-center text-md lg:text-3xl text-white cursor-pointer lg:w-8/12'>
                    <Link href="#fullblack" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/fullblack-icon.svg" width={30} height={30}/>{raulidata.fullBlackBtn}</li></Link>
                    <Link href="#easyclick" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/easyclick-icon.svg" width={30} height={30}/>{raulidata.easyclickBtn}</li></Link>
                    <Link href="#warranty" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/warranty-icon.svg" width={30} height={30}/>{raulidata.garanciaBtn}</li></Link>
                    <Link href="#media" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/media-icon.svg" width={30} height={30}/>{raulidata.mediatarBtn}</li></Link>
                    <Link href="#extra" className='flex justify-center'><li className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center hover:bg-neutral-900 py-2 px-2 lg:py-4 lg:px-8 w-full'><Image src="https://rauli.hu/wp-content/uploads/2023/03/extra-icon.svg" width={30} height={30}/>{raulidata.extraBtn}</li></Link>
                </ul>
            </nav>
        </>
    )
}

