import { useUnit, useGate } from "effector-react";
import { $animeFilters, $isLoading, FiltersGate } from "./filters";

export const useAnimeFilters = () => {
  const [animeFilters, loading] = useUnit([$animeFilters, $isLoading]);

  useGate(FiltersGate);
  console.log(animeFilters, "animeFiltersanimeFiltersanimeFilters");

  return {
    ...animeFilters,
    loading,
  };
};
