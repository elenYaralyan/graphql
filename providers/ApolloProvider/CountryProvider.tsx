"use client";

import { ApolloProvider as BaseApolloProvider } from "@apollo/client/react";
import { PropsWithChildren } from "react";
import { countriesClient } from "@/lib/apollo/index";

export const CountryProvider = ({ children }: PropsWithChildren) => (
  <BaseApolloProvider client={countriesClient}>{children}</BaseApolloProvider>
);
