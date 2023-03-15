import { gql } from '@apollo/client';

export const RAULI_CZ = gql`
query RAULI_CZ {
  pages(where: {title: "Rauli-CZ"}) {
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
      }
    }
  }
}
`;