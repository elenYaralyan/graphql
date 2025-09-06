import { useUnit } from 'effector-react';
import { $anime, $isLoading, fetchAnime } from './anime';
import { useEffect } from 'react';

export const useAnime = () => {
    const [animeState, loading] = useUnit([$anime, $isLoading]);
    const fetchAnimeEvent = useUnit(fetchAnime);

    useEffect(() => {
        fetchAnimeEvent();
    }, [fetchAnimeEvent]);

    return {
        ...animeState,
        loading
    };
};