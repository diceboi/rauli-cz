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


export const IRJ_NEUNK_FORM = gql`
query IRJ_NEKUNK_FORM {
  gfForm(id: "1", idType: DATABASE_ID) {
    formFields {
      nodes {
        ... on NameField {
          id
          label
          nameValues {
            first
            last
          }
          type
          errorMessage
          isRequired
          inputs {
            label
            ... on NameInputProperty {
              id
              customLabel
            }
          }
        }
        ... on EmailField {
          id
          label
          type
          value
          isRequired
          errorMessage
        }
        ... on TextAreaField {
          id
          label
          value
          isRequired
          type
        }
        ... on ConsentField {
          id
          errorMessage
          isRequired
          checkboxLabel
        }
      }
    }
  }
}`
;


export const SUBMIT_FORM = gql`
  mutation submitForm($input: SubmitGravityFormsFormInput!) {
    submitGravityFormsForm(input: $input) {
      clientMutationId
      status
    }
  }
`;