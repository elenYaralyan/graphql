import { createStore, createEvent, createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { GET_COUNTRIES } from '@/graphql/countriesQueries';
import { GetCountriesQuery } from '@/graphql/generated/graphql';
import { countriesClient } from '@/lib/apollo';
import { navigationTriggered } from '@/router';

export interface CountriesState {
  data: GetCountriesQuery["countries"];
  error: string | null;
}

export const setError = createEvent<string | null>();

export const CountriesGate = createGate();

export const fetchCountriesFx = createEffect(async () => {
  const result = await countriesClient.query<GetCountriesQuery>({
    query: GET_COUNTRIES,
  });

  if (!result.data?.countries) {
    throw new Error('Failed to fetch countries data');
  }

  return result.data.countries;
});

export const $countries = createStore<CountriesState>({
  data: [],
  error: null,
})
  .on(fetchCountriesFx.doneData, (state, data) => ({
    ...state,
    data: data,
    error: null,
  }))
  .on(fetchCountriesFx.failData, (state, error) => ({
    ...state,
    data: [],
    error: error.message,
  }))
  .on(setError, (state, error) => ({
    ...state,
    error,
  }));

export const $isLoading = fetchCountriesFx.pending.map((isPending) => isPending);

sample({
  clock: CountriesGate.open,
  target: fetchCountriesFx,
});

sample({
  clock: fetchCountriesFx.done,
  fn: () => '/countries',
  target: navigationTriggered,
});