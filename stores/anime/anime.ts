import { createStore, createEvent, createEffect, sample } from 'effector';
import { GET_ANIME } from '@/graphql/animeQueries';
import { Page, Media } from '@/graphql/generated/graphql';
import { anilistClient } from '@/lib/apollo';

export interface AnimeState {
    data: Media[];
    error: string | null;
}

export const fetchAnime = createEvent();
export const setError = createEvent<string | null>();

export const fetchAnimeFx = createEffect(async () => {
    const result = await anilistClient.query<{ Page: Page }>({
        query: GET_ANIME,
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
    clock: fetchAnime,
    target: fetchAnimeFx,
});
