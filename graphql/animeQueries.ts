import { gql } from "@apollo/client";

export const COVER_IMAGE_FRAGMENT = gql`
  fragment CoverImageFields on MediaCoverImage {
    color
    large
    extraLarge
  }
`;

export const STUDIOS_FRAGMENT = gql`
  fragment StudiosFields on StudioConnection {
    nodes {
      name
    }
  }
`;

export const TITLE_FRAGMENT = gql`
  fragment TitleFields on MediaTitle {
    romaji
    english
    native
  }
`;

export const GET_ANIME = gql`
  query {
    Page(perPage: 20) {
      media(sort: TRENDING_DESC, type: ANIME, status: RELEASING, isAdult:false) {
        id
        title {
          ...TitleFields
        }
        coverImage {
          ...CoverImageFields
        }
        bannerImage
      }
    }
  }
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
`;

export const GET_ANIME_BY_ID = gql`
  query ($id: Int, $episodes: Int, $status: MediaStatus) {
    Media(id: $id, type: ANIME, episodes: $episodes, status: $status, isAdult:false) {
      id
      title {
        ...TitleFields
      }
     characters(sort: FAVOURITES_DESC, perPage:8) {
        edges {
          name
          id
            voiceActors(language: JAPANESE)  {
            name {
              full
              native
            }
          image {
            medium
          }
          }
          role
          node {
            image {
              medium
            }
            name {
              full
            }
          }
        }
      }
      bannerImage
      format
      coverImage {
        ...CoverImageFields
      }
      popularity
      rankings {
        allTime
      }
      trailer {
        id
        site
        thumbnail
      }
      genres
      episodes
      description
      duration
      averageScore
      favourites
      source
      startDate {
        year
      }
      studios {
        ...StudiosFields
      }
      status
    }
  }
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
  ${STUDIOS_FRAGMENT}
`;

export const GET_ANIME_ALL = gql`
  query GetAnime($page: Int, $perPage: Int, $genre:String , $seasonYear: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(
        sort: SCORE_DESC
        type: ANIME
        isAdult: false
        genre: $genre
        seasonYear: $seasonYear
      ) {
        id
        rankings {
          allTime
          rank
          format
          context
        }
        title {
          ...TitleFields
        }
        coverImage {
          ...CoverImageFields
        }
        duration
        genres
        episodes
        averageScore
        studios {
          ...StudiosFields
        }
        status
      }
    }
  }
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
  ${STUDIOS_FRAGMENT}
`;



export const FIlTERS = gql`
  query GetAnimeFilters {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
      isAdult
    }
  }
`;

export const GET_FILTERED_ANIME = gql`
  query GetFilteredAnime($page: Int, $perPage: Int, $genres: [String], $year: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(
        sort: SCORE_DESC
        type: ANIME
        isAdult: false
        genre_in: $genres
        seasonYear: $year
      ) {
        id
        rankings {
          allTime
          rank
          format
          context
        }
        title {
          ...TitleFields
        }
        coverImage {
          ...CoverImageFields
        }
        duration
        genres
        episodes
        averageScore
        studios {
          ...StudiosFields
        }
        status
        startDate {
          year
        }
      }
    }
  }
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
  ${STUDIOS_FRAGMENT}
`;