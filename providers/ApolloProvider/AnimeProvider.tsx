"use client";

import { anilistClient } from "@/lib/apollo";
import { ApolloProvider as BaseApolloProvider } from "@apollo/client/react";
import { PropsWithChildren } from "react";

export const AnimeProvider = ({ children }: PropsWithChildren) => (
  <BaseApolloProvider client={anilistClient}>{children}</BaseApolloProvider>
);
