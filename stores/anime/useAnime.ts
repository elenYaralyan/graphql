import { useUnit } from 'effector-react';
import { $anime, $isLoading, fetchAnime } from './anime';

export const useAnime = () => {
    const [animeState, loading] = useUnit([$anime, $isLoading]);
    console.log(animeState, loading, "useAnime state");

    const fetchAnimeEvent = useUnit(fetchAnime);
    const refetch = () => {
        fetchAnimeEvent();
    };
    return {
        ...animeState,
        loading,
        refetch
    };
};