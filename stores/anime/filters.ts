import { createStore, createEvent, createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { GetAnimeFiltersQuery } from '@/graphql/generated/graphql';
import { anilistClient } from '@/lib/apollo';
import { FIlTERS } from "@/graphql/animeQueries"

export interface AnimeState {
    data: string[];
    error: string | null;
}

export const setError = createEvent<string | null>();

export const FiltersGate = createGate<{ page?: number; perPage?: number }>();

export const fetchAnimeFilters = createEffect(async (params: { page?: number; perPage?: number } = {}) => {
    const result = await anilistClient.query({
        query: FIlTERS,
        variables: params,
    });

    return result.data as GetAnimeFiltersQuery;
});

export const $animeFilters = createStore<AnimeState>({
    data: [],
    error: null,
})
    .on(fetchAnimeFilters.doneData, (state, data) => ({
        ...state,
        data: data.genres?.filter((genre): genre is string => genre !== null) || [],
        error: null,
    }))
    .on(fetchAnimeFilters.failData, (state, error) => ({
        ...state,
        data: [],
        error: error instanceof Error ? error.message : String(error),
    }))
    .on(setError, (state, error) => ({
        ...state,
        error,
    }));

export const $isLoading = fetchAnimeFilters.pending;

sample({
    clock: FiltersGate.open,
    target: fetchAnimeFilters,
});
