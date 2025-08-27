"use client";

import { useCountries } from "@/stores/countries/useCountries";

export default function CountriesPage() {
  const { data: countries, loading, error, refetch } = useCountries();

  if (loading) {
    return <div>Loading countries...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }
  console.log("countries", countries);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <button
        onClick={refetch}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries?.map((country) => (
          <div key={country.code} className="p-4 border rounded-lg shadow-sm">
            <div className="text-4xl mb-2">{country.emoji}</div>
            <div className="font-semibold">{country.name}</div>
            <div className="text-sm text-gray-600">{country.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
