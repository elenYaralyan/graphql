import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// AniList API
export const anilistClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql.anilist.co",
    }),
    cache: new InMemoryCache(),
});
