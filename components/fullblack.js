import Image from "next/image"

export default function FullBlack({ raulidata }) {
    return (
        <>
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
        </>
    )
}

