import { createStore, createEvent, createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { GET_ANIME_BY_ID } from '@/graphql/animeQueries';
import { Media } from '@/graphql/generated/graphql';
import { anilistClient } from '@/lib/apollo';

export interface AnimeDetailsState {
    data: Media | null;
    error: string | null;
}

export const setAnimeDetailsError = createEvent<string | null>();

export const AnimeDetailsGate = createGate<{ id: number }>();

export const fetchAnimeDetailsFx = createEffect(async (id: number) => {
    const result = await anilistClient.query<{ Media: Media }>({
        query: GET_ANIME_BY_ID,
        variables: { id },
    });

    if (!result.data?.Media) {
        throw new Error('Failed to fetch anime details');
    }

    return result.data.Media;
});

export const $animeDetails = createStore<AnimeDetailsState>({
    data: null,
    error: null,
})
    .on(fetchAnimeDetailsFx.doneData, (state, data) => ({
        ...state,
        data,
        error: null,
    }))
    .on(fetchAnimeDetailsFx.failData, (state, error) => ({
        ...state,
        data: null,
        error: error instanceof Error ? error.message : String(error),
    }))
    .on(setAnimeDetailsError, (state, error) => ({
        ...state,
        error,
    }));

export const $isAnimeDetailsLoading = fetchAnimeDetailsFx.pending;

sample({
    clock: AnimeDetailsGate.open,
    fn: ({ id }) => id,
    target: fetchAnimeDetailsFx,
});