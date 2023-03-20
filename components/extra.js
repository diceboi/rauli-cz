import Image from "next/image"


export default function Extra({ raulidata }) {
    return(
        <>
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
        </>
    )
}