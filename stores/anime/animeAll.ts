import { createStore, createEvent, createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { GET_ANIME_All } from '@/graphql/animeQueries';
import { Page, Media } from '@/graphql/generated/graphql';
import { anilistClient } from '@/lib/apollo';

export interface AnimeState {
    data: Media[];
    error: string | null;
}

export const setError = createEvent<string | null>();

export const AnimeAllGate = createGate<{ page?: number; perPage?: number }>();

export const fetchAnimeFx = createEffect(async (params: { page?: number; perPage?: number } = {}) => {
    const result = await anilistClient.query<{ Page: Page }>({
        query: GET_ANIME_All,
        variables: params,
    });

    if (!result.data?.Page?.media) {
        throw new Error('Failed to fetch anime data');
    }

    return result.data.Page.media.filter((item): item is Media => item !== null);
});

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
