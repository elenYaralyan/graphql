import { useUnit } from 'effector-react';
import { $countries, fetchCountries, $isLoading } from './countries';

export const useCountries = () => {
  const [countriesState, loading] = useUnit([$countries, $isLoading]);
  const fetchCountriesEvent = useUnit(fetchCountries);

  const refetch = () => {
    fetchCountriesEvent();
  };

  return {
    ...countriesState,
    loading,
    refetch,
  };
};