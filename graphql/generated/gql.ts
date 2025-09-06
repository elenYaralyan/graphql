/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment CoverImageFields on MediaCoverImage {\n    color\n    large\n    extraLarge\n  }\n": typeof types.CoverImageFieldsFragmentDoc,
    "\n  fragment StudiosFields on StudioConnection {\n    nodes {\n      name\n    }\n  }\n": typeof types.StudiosFieldsFragmentDoc,
    "\n  fragment TitleFields on MediaTitle {\n    romaji\n    english\n    native\n  }\n": typeof types.TitleFieldsFragmentDoc,
    "\n  query GetAnime($page: Int, $perPage: Int, $genre:String , $seasonYear: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre: $genre\n        seasonYear: $seasonYear\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n      }\n    }\n  }\n  \n  \n  \n": typeof types.GetAnimeDocument,
    "\n  query GetAnimeFilters {\n    genres: GenreCollection\n    tags: MediaTagCollection {\n      name\n      isAdult\n    }\n  }\n": typeof types.GetAnimeFiltersDocument,
    "\n  query GetFilteredAnime($page: Int, $perPage: Int, $genres: [String], $year: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre_in: $genres\n        seasonYear: $year\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n        startDate {\n          year\n        }\n      }\n    }\n  }\n  \n  \n  \n": typeof types.GetFilteredAnimeDocument,
};
const documents: Documents = {
    "\n  fragment CoverImageFields on MediaCoverImage {\n    color\n    large\n    extraLarge\n  }\n": types.CoverImageFieldsFragmentDoc,
    "\n  fragment StudiosFields on StudioConnection {\n    nodes {\n      name\n    }\n  }\n": types.StudiosFieldsFragmentDoc,
    "\n  fragment TitleFields on MediaTitle {\n    romaji\n    english\n    native\n  }\n": types.TitleFieldsFragmentDoc,
    "\n  query GetAnime($page: Int, $perPage: Int, $genre:String , $seasonYear: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre: $genre\n        seasonYear: $seasonYear\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n      }\n    }\n  }\n  \n  \n  \n": types.GetAnimeDocument,
    "\n  query GetAnimeFilters {\n    genres: GenreCollection\n    tags: MediaTagCollection {\n      name\n      isAdult\n    }\n  }\n": types.GetAnimeFiltersDocument,
    "\n  query GetFilteredAnime($page: Int, $perPage: Int, $genres: [String], $year: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre_in: $genres\n        seasonYear: $year\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n        startDate {\n          year\n        }\n      }\n    }\n  }\n  \n  \n  \n": types.GetFilteredAnimeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CoverImageFields on MediaCoverImage {\n    color\n    large\n    extraLarge\n  }\n"): (typeof documents)["\n  fragment CoverImageFields on MediaCoverImage {\n    color\n    large\n    extraLarge\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StudiosFields on StudioConnection {\n    nodes {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment StudiosFields on StudioConnection {\n    nodes {\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TitleFields on MediaTitle {\n    romaji\n    english\n    native\n  }\n"): (typeof documents)["\n  fragment TitleFields on MediaTitle {\n    romaji\n    english\n    native\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAnime($page: Int, $perPage: Int, $genre:String , $seasonYear: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre: $genre\n        seasonYear: $seasonYear\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query GetAnime($page: Int, $perPage: Int, $genre:String , $seasonYear: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre: $genre\n        seasonYear: $seasonYear\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n      }\n    }\n  }\n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAnimeFilters {\n    genres: GenreCollection\n    tags: MediaTagCollection {\n      name\n      isAdult\n    }\n  }\n"): (typeof documents)["\n  query GetAnimeFilters {\n    genres: GenreCollection\n    tags: MediaTagCollection {\n      name\n      isAdult\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFilteredAnime($page: Int, $perPage: Int, $genres: [String], $year: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre_in: $genres\n        seasonYear: $year\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n        startDate {\n          year\n        }\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query GetFilteredAnime($page: Int, $perPage: Int, $genres: [String], $year: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        sort: SCORE_DESC\n        type: ANIME\n        isAdult: false\n        genre_in: $genres\n        seasonYear: $year\n      ) {\n        id\n        rankings {\n          allTime\n          rank\n          format\n          context\n        }\n        title {\n          ...TitleFields\n        }\n        coverImage {\n          ...CoverImageFields\n        }\n        duration\n        genres\n        episodes\n        averageScore\n        studios {\n          ...StudiosFields\n        }\n        status\n        startDate {\n          year\n        }\n      }\n    }\n  }\n  \n  \n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;