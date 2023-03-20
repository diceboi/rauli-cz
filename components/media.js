


export default function Media({ raulidata }) {
    return(
        <>
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
        </>
    )
}