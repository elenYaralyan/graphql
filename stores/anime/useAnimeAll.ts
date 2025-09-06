import { useUnit, useGate } from 'effector-react';
import { $anime, $isLoading, AnimeAllGate } from './animeAll';

export const useAnimeAll = (params?: { page?: number; perPage?: number }) => {
    const [animeState, loading] = useUnit([$anime, $isLoading]);

    useGate(AnimeAllGate, params);

    return {
        ...animeState,
        loading
    };
};