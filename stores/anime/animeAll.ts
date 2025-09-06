import { createStore, createEvent, createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { GET_ANIME_ALL } from '@/graphql/animeQueries';
import { Page, Media } from '@/graphql/generated/graphql';
import { anilistClient } from '@/lib/apollo';

export interface AnimeState {
    data: Media[];
    error: string | null;
}

export interface AnimeFilters {
    genres?: string;
    year?: number;
}

export const setError = createEvent<string | null>();

export const AnimeAllGate = createGate<{ page?: number; perPage?: number; filters?: AnimeFilters }>();

export const fetchAnimeFx = createEffect(
    async (params: { page?: number; perPage?: number; filters?: AnimeFilters } = {}) => {
        const { page, perPage, filters } = params;

        const result = await anilistClient.query<{ Page: Page }>({
            query: GET_ANIME_ALL,
            variables: {
                page,
                perPage,
                genre_in: filters?.genres,
                seasonYear: filters?.year,
            },
        });

        if (!result.data?.Page?.media) {
            throw new Error('Failed to fetch anime data');
        }

        return result.data.Page.media.filter((item): item is Media => item !== null);
    }
);

export const $anime = createStore<AnimeState>({
    data: [],
    error: null,
})
    .on(fetchAnimeFx.doneData, (state, data) => ({
        ...state,
        data,
        error: null,
    }))
    .on(fetchAnimeFx.failData, (state, error) => ({
        ...state,
        data: [],
        error: error instanceof Error ? error.message : String(error),
    }))
    .on(setError, (state, error) => ({
        ...state,
        error,
    }));

export const $isLoading = fetchAnimeFx.pending;

sample({
    clock: AnimeAllGate.open,
    target: fetchAnimeFx,
});
