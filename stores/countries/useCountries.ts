import { useUnit, useGate } from 'effector-react';
import { $countries, $isLoading, CountriesGate, fetchCountriesFx } from './countries';

export const useCountries = () => {
  const [countriesState, loading] = useUnit([$countries, $isLoading]);

  useGate(CountriesGate);

  const refetch = () => {
    fetchCountriesFx();
  };

  return {
    ...countriesState,
    loading,
    refetch,
  };
};