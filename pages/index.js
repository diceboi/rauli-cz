import Head from 'next/head'
import client from '../apollo-client'
import submitForm from '../lib/submitform'


import Hero from '../components/hero'
import HomeNav from '../components/homenav'
import FullBlack from '../components/fullblack'
import Easyclick from '../components/easyclick'
import Warranty from '../components/warranty'
import Media from '../components/media'
import Extra from '../components/extra'
import Workshop from '../components/workshop'
import Contact from '../components/contact'
import Footer from '../components/footer'

import { RAULI_CZ } from '../lib/queries'

export default function Home({ raulidata }) {

  return (
    <>
      <Head>
        <title>Rauli Maďarsko</title>
        <meta name="description" content="exkluzivní, inovativní, finská nosná konstrukce fotovoltaických panelů" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://rauli.hu/wp-content/uploads/2022/05/rauli-favicon.png" />
      </Head>
      <main>
        <Hero raulidata={raulidata} />
        <HomeNav raulidata={raulidata} />
        <FullBlack raulidata={raulidata} />
        <Easyclick raulidata={raulidata} />
        <Warranty raulidata={raulidata} />
        <Media raulidata={raulidata} />
        <Extra raulidata={raulidata} />
        <Workshop raulidata={raulidata} />
        <Contact raulidata={raulidata} />
        <Footer raulidata={raulidata} />
      </main>
    </>
  )
}


export async function getStaticProps() {
  const { data:RauliCzData } = await client.query({ query: RAULI_CZ });
  const raulidata = RauliCzData.pages.nodes[0].rauliMain;

  return {
    props: {
      raulidata,
    },
    revalidate: 5,
  };

}