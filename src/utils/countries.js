const filterByName = (countries, name) => {
  const cleanName = name.trim().toLowerCase();

  return countries.filter((country) => country.name.common.toLowerCase().includes(cleanName));
};

export const filterByCountryPopulation = (countries, populationInMillions) => {
  const population = populationInMillions * 1000000;

  return countries.filter((country) => country.population <= population);
};

export const countries = { filterByName, filterByCountryPopulation };
