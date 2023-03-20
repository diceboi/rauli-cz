


export default function Warranty({ raulidata }) {
    return(
        <>
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
        </>
    )
}