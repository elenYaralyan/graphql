import { gql } from "@apollo/client";

export const GET_ANIME = gql`query {
  Page {
    media {
      coverImage {
        color
        large
        extraLarge
      }
      title {
        english
      }
      bannerImage
      description
      id
    }
  }
}`;
