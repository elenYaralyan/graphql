import { useUnit, useGate } from 'effector-react';
import { $anime, $isLoading, AnimeAllGate, AnimeFilters } from './animeAll';

interface UseAnimeAllParams {
    page?: number;
    perPage?: number;
    filters?: AnimeFilters;
}

export const useAnimeAll = (params?: UseAnimeAllParams) => {
    const [animeState, loading] = useUnit([$anime, $isLoading]);

    useGate(AnimeAllGate, params);

    return {
        ...animeState,
        loading,
    };
};
