import { useUnit, useGate } from 'effector-react';
import { $animeDetails, $isAnimeDetailsLoading, AnimeDetailsGate } from './animeDetails';

export const useAnimeDetails = (id: number) => {
    const [animeDetailsState, loading] = useUnit([$animeDetails, $isAnimeDetailsLoading]);

    useGate(AnimeDetailsGate, { id });

    return {
        ...animeDetailsState,
        loading
    };
};