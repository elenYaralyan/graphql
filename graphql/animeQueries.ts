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
        native
      }
      bannerImage
      description
      id
      genres
      trending
      trailer {
        thumbnail
        site
        id
      }
    }
  }
}`;
