import { gql } from '@apollo/client';

export const RAULI_CZ = gql`
query RAULI_CZ {
  pages(where: {title: "Rauli-HU"}) {
    nodes {
      rauliMain {
        alcim
        ctaBovebben
        ctaVideo
        fieldGroupName
        focim
        heroHatter {
          sourceUrl
        }
        popupYoutubeVideo
        rauliLogo {
          sourceUrl
        }
        easyclickBtn
        evek
        extraAlcim
        extraBtn
        extraElsoSzakaszHatter {
          sourceUrl
        }
        extraElsoSzakaszKep {
          sourceUrl
        }
        extraElsoSzakaszSzoveg
        extraFocim
        extraHarmadikSzakaszHatter {
          sourceUrl
        }
        extraHarmadikSzakaszKep {
          sourceUrl
        }
        extraHarmadikSzakaszSzoveg
        extraHatodikSzakaszHatter {
          sourceUrl
        }
        extraHatodikSzakaszKep {
          sourceUrl
        }
        extraHatodikSzakaszSzoveg
        extraMasodikSzakaszHatter {
          sourceUrl
        }
        extraMasodikSzakaszKep {
          sourceUrl
        }
        extraMasodikSzakaszSzoveg
        extraNegyedikSzakaszHatter {
          sourceUrl
        }
        extraNegyedikSzakaszKep {
          sourceUrl
        }
        extraNegyedikSzakaszSzoveg
        extraOtodikSzakaszHatter {
          sourceUrl
        }
        extraOtodikSzakaszKep {
          sourceUrl
        }
        extraOtodikSzakaszSzoveg
        footer1Logo {
          sourceUrl
        }
        footer2Logo {
          sourceUrl
        }
        footer3Logo {
          sourceUrl
        }
        footerKep {
          sourceUrl
        }
        footerNarancsAdatkezelesiNyilatkozat
        footerNarancsElsoSzoveg
        footerNarancsOrszagok
        footerRendeles
        footerRendelesNev
        footerRendelesTelefonszam
        footerTovabbiInformacio
        footerTovabbiInformacioNev
        footerTovabbiInformacioTelefonszam
        fullBlackBtn
        fullblack1kep {
          sourceUrl
        }
        fullblack2kep {
          sourceUrl
        }
        fullblack3kep {
          sourceUrl
        }
        fullblack4kep {
          sourceUrl
        }
        fullblack5kep {
          sourceUrl
        }
        fullblack6kep {
          sourceUrl
        }
        fullblackHotspotAlcim1
        fullblackHotspotAlcim2
        fullblackHotspotAlcim3
        fullblackHotspotFocim
        fullblackHotspotKep {
          sourceUrl
        }
        fullblackHotspotNagySzilardsag
        fullblackHotspotPrecizios
        fullblackHotspotSkandinav
        fullblackHotspotTeleszkop
        fullblackHotspotYoutubeGomb
        fullblackHotspotYoutubeVideo
        fullblackSectionAlcim
        fullblackSectionFocim
        garancia
        garanciaBtn
        garanciaSzoveg
        irjNekunkEmail
        irjNekunkFocim
        irjNekunkKeresztnev
        irjNekunkKuldesGomb
        irjNekunkRovidUzenet
        irjNekunkVezeteknev
        mediatar1Video
        mediatar2Video
        mediatar3Video
        mediatar5Video
        mediatar4Video
        mediatar6Video
        mediatar7Video
        mediatar8Video
        mediatar9Video
        mediatarBtn
        mediatarCim
        workshopAlcim
        workshopFocim
        workshopGomb
      }
    }
  }
}
`;