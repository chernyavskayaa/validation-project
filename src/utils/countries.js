const filterByName = (countries, name) => {
  const cleanName = name.trim().toLowerCase();

  return countries.filter((country) => country.name.common.toLowerCase().includes(cleanName));
};

export const countries = { filterByName };
