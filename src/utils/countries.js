const filterByName = (countries, name) => {
  const cleanName = name.trim().toLowerCase();

  return countries.filter((country) => country.name.common.toLowerCase().includes(cleanName));
};

export const filterByCountryPopulation = (countries, populationInMillions) => {
  const population = populationInMillions * 1000000;

  return countries.filter((country) => country.population <= population);
};

const sortMapping = {
  ascend: (a, b) => a.name.common.localeCompare(b.name.common),
  descend: (a, b) => b.name.common.localeCompare(a.name.common),
};

export const sortByCountryName = (countries, sortDirection = 'ascend') => {
  return countries.sort(sortMapping[sortDirection]);
};

export const countries = { filterByName, filterByCountryPopulation, sortByCountryName };
