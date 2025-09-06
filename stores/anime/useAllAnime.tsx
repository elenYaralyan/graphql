import { useUnit, useGate } from "effector-react";
import { $anime, $isLoading, AnimeAllGate } from "./animeAll";

export const useAllAnime = () => {
  const [animeState, loading] = useUnit([$anime, $isLoading]);

  useGate(AnimeAllGate);

  return {
    ...animeState,
    loading,
  };
};
