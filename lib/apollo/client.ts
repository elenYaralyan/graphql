import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Countries API
export const countriesClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://countries.trevorblades.com/graphql",
    }),
    cache: new InMemoryCache(),
});

// AniList API
export const anilistClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql.anilist.co",
    }),
    cache: new InMemoryCache(),
});
