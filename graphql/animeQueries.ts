import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  query {
    Page(perPage: 20) {
      media(sort: TRENDING_DESC, type: ANIME, status: RELEASING) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          color
          large
          extraLarge
        }
        bannerImage
      }
    }
  }
`;


export const GET_ANIME_BY_ID = gql`query ($id: Int, $episodes: Int, $status: MediaStatus) {
  Media(id: $id, type: ANIME, episodes: $episodes, status: $status) {
    id
    title {
      romaji
      english
      native
    }
    bannerImage
    characters {
      nodes {
        id
        name {
          full
          alternative
        }
        image {
          large
        }
        isFavourite
        description
      }
    }
    coverImage {
      color
      large
      extraLarge
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
      startDate {
      year
    }
    studios {
      nodes {
        name
      }
    }
    status
  }
}`



export const GET_ANIME_All = gql`
  query GetAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: SCORE_DESC, type: ANIME) {
        id
        rankings {
        allTime
        rank
        format
        context
       }
        title {
          romaji
          english
          native
        }
        coverImage {
          color
          large
          extraLarge
        }
        duration
        genres
      }
    }
  }
`;
