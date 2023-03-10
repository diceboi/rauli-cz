import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rauli Maďarsko</title>
        <meta name="description" content="exkluzivní, inovativní, finská nosná konstrukce fotovoltaických panelů" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://rauli.hu/wp-content/uploads/2022/05/rauli-favicon.png" />
      </Head>
      <main>
        <section id='hero' className="flex justify-center items-center bg-neutral-900 h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-1-1.jpg')]">
          <div className='flex justify-center items-center'>
            <div className='flex flex-col gap-4 border-l-8 border-[#e94e1b] text-white capitalize w-3/5 px-4 min-w-min'>
              <Image src="https://rauli.hu/wp-content/uploads/2022/04/rauli-logo.png" width={150} height={100}/>
              <h1 className=' text-8xl'>exkluzív, innovatív, finn napelem tartószerkezet</h1>
              <h2 className=' text-4xl'>Megérkezett közép- és kelet európába a teljesen fekete Finn acél napelem tartószerkezet a raulitól!</h2>
              <div className='flex gap-4'>
                <button className=' bg-[#e94e1b] px-8 py-2 text-3xl'>
                  <Link href="#fullblack">Bővebben</Link>
                </button>
                <button className=' bg-[#e94f1b00] border border-[#e94e1b] px-8 py-2 text-2xl'>
                  <Link href="#fullblack">Nézd meg a videót</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <nav className='top-0 sticky border-b border-b-[#e94e1b] z-50'>
          <ul className='flex justify-center text-3xl text-white bg-neutral-900 cursor-pointer'>
            <Link href="#fullblack"><li className='hover:bg-[#e94e1b] py-4 px-8'>Full Black Design</li></Link>
            <Link href="#easyclick"><li className='hover:bg-[#e94e1b] py-4 px-8'>Easyclick Techológia</li></Link>
            <Link href="#warranty"><li className='hover:bg-[#e94e1b] py-4 px-8'>A leghosszabb garancia</li></Link>
            <Link href="#media"><li className='hover:bg-[#e94e1b] py-4 px-8'>Médiatár</li></Link>
            <Link href="#extra"><li className='hover:bg-[#e94e1b] py-4 px-8'>Extra</li></Link>
          </ul>
        </nav>

        <section id='fullblack' className='w-full h-auto'>
          <div className='grid grid-cols-3 grid-rows-2'>
            <div className="relative col-span-2 row-span-3 w-full h-auto bg-center bg-no-repeat bg-cover bg-[url('https://rauli.hu/wp-content/uploads/2022/04/rauli-hatter-web.jpg')]">
              <div className='text-right absolute right-0 bottom-0 p-4 text-white w-4/5'>
                <h1 className='text-8xl'>Full Black Design</h1>
                <h2 className='text-4xl'>Teljesen fekete megjelenés ami bármilyen tetőfelületet exkluzívvá tesz</h2>
              </div>
            </div>
            <Image className='col-span-1 row-span-1 w-full h-full' src="https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-.jpg" width={1440} height={960}></Image>
            <Image className='col-span-1 row-span-1 w-full h-full' src="https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-26.jpg" width={1440} height={960}></Image>
          </div>

          <div className='grid grid-cols-3 grid-rows-2'>
            <Image className='col-span-1 row-span-1 w-full h-full' src="https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-2.jpg" width={1440} height={960}></Image>
            
            <div className="relative col-span-2 row-span-3 w-full h-auto bg-center bg-no-repeat bg-cover bg-[url('https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-12.jpg')]">
              
            </div>
            
            <Image className='col-span-1 row-span-1 w-full h-full' src="https://rauli.hu/wp-content/uploads/2022/04/Rauli-komponentti-11-2019-HR-jpg-18.jpg" width={1440} height={960}></Image>
            
          </div>
        </section>



        <section id='easyclick'>
          <div className='grid grid-cols-2'>
            <div className='flex'>
              <div className="absolute z-10 col-span-2 w-[1000px] h-[56,25%] bg-center bg-no-repeat bg-auto bg-[url('https://rauli.hu/wp-content/uploads/2022/04/video-utan.jpg')]">
              </div>
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/FzBBb-2valk" title="RAULI - Fastest Mounting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='w-auto flex'>
              <div className="absolute z-10 col-span-2 w-[100%] h-[56,25%] bg-center bg-no-repeat bg-auto bg-[url('https://rauli.hu/wp-content/uploads/2022/04/video-utan.jpg')]">
              </div>
              <iframe width="100%" height="56,25%" src="https://www.youtube.com/embed/FzBBb-2valk" title="RAULI - Fastest Mounting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

          </div>
        </section>

        <section id='warranty' className='flex justify-center items-center h-screen'>
          <div className='grid grid-row-1 grid-cols-2 min-w-min'>
            <div className='col-span-1 text-8xl text-white'>
              <h1 className='px-4 py-2 bg-[#e94e1b] w-fit'>A Leghosszabb </h1>
              <h1 className='px-4 py-2 bg-[#e94e1b] w-fit'>garanciaidő</h1>
              <h1 className='px-4 py-2 bg-[#e94e1b] w-fit'>a piacon</h1>
            </div>

            <div className='flex flex-col col-span-1 align-middle justify-center items-center'>
              <h1 className='text-8xl font-black text-[#e94e1b]'>30 év</h1>
              <h2 className='text-5xl'>Garancia</h2>
            </div>

          </div>
        </section>

        <section id='media' className='mx-auto w-8/12 min-w-min my-12'> 
          <div className='grid grid-cols-1 grid-rows-4 gap-6 items-end'>
            <h1 className='text-8xl text-white px-4 pt-2 pb-1 bg-[#e94e1b] w-fit h-fit'>Médiatár</h1>
            
            <div className='grid grid-cols-3 grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/TU8mi6g-02M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/6T-XSqNcprE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/qY7Q1ifpK-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='grid grid-cols-3 grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/_igmjK2oWbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/qaNmQCq5b5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/_vSz0tTkKgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='grid grid-cols-3 grid-rows-1 gap-6'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/4FE96PJNVyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/PbRUAyuFaBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/xS-PX6u4A8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
          </div>
        </section>

        <section id='extra' className='bg-neutral-900 my-36'>
          <div className='flex flex-col justify-center items-center w-8/12 min-w-min mx-auto py-12'>
            <h1 className='text-8xl text-white'>Pénz - Idő - Energia</h1>
            <h1 className='text-8xl text-white'>Megtakarítás</h1>
            <h2 className='text-5xl text-[#e94e1b]'>Ami extra bevételt jelent</h2>
          </div>

          <div className='flex flex-col justify-center items-center h-[60vh] bg-neutral-900'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/rauli-fekete.png" width={700} height={500} className="mb-[-150px] z-10"/>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4'>Az univerzális alkatrészek anyagszámítása, és rendelése pofon egyszerű, nem igényel hosszú órákat</p>
          </div>

          <div className='flex flex-col justify-center items-center h-[60vh] bg-neutral-900'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/raktarozas.png" width={400} height={400} className="mb-[-100px]"/>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4'>A kevés darabszámnak köszönhetően könnyű és takarékos a raktározás</p>
          </div>

          <div className='flex flex-col justify-center items-center h-[60vh] bg-neutral-900'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/rauli-nincs-vagas.png" width={700} height={500} className="mb-[-150px] z-10"/>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4'>a maximum 2,4 m hosszú sínek rakásolhatók, így dobozos autó belsejében is könnyedén szállíthatók.</p>
          </div>

          <div className='flex flex-col justify-center items-center h-[60vh] bg-neutral-900'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/rauli-teleszkop.png" width={700} height={500} className="mb-[-100px] ml-[-140px] z-10"/>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4'>a teleszkópos sínek miatt nincs szükség helyszíni szabásra, a munka nagy mértékben felgyorsul</p>
          </div>

          <div className='flex flex-col justify-center items-center h-[60vh] bg-neutral-900'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/easy-click-abra.png" width={500} height={300} className="mb-[50px] z-10"/>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4'>Az easyclick rendszernek hála szinte csavarozás nélkül telepíthető - szupergyors</p>
          </div>

          <div className='relative flex flex-col justify-center items-center h-[60vh] bg-neutral-900 overflow-hidden'>
            <Image src="https://rauli.hu/wp-content/uploads/2022/04/ido-rauli.jpg" width={1920} height={1080} className="absolute opacity-10 w-full h-auto mix-blend-luminosity"/>
            <h1 className='text-9xl font-black text-neutral-800 mb-[-30px]'>+40%</h1>
            <p className='text-3xl text-white text-center bg-[#e94e1b] w-3/6 py-2 px-4 z-10'>a gyors és egyszerű szerelésnek köszönhetően akár 40%-al több telepítés kivitelezhető ugyanannyi emberrel, vagy kissebb csapat is elég ugyanahhoz a munkához</p>
          </div>
        </section>

      </main>
    </>
  )
}
