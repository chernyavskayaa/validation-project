import { countries } from '../countries';

const mockCountries = [
  {
    population: 1000000,
    name: {
      common: 'Bermuda',
    },
  },
  {
    population: 10000,
    name: {
      common: 'Antarctica',
    },
  },
  {
    population: 2000000,
    name: {
      common: 'Angola',
    },
  },
  {
    population: 40000000,
    name: {
      common: 'Ukraine',
    },
  },
  {
    population: 23000000,
    name: {
      common: 'Sweden',
    },
  },
];

describe('Utils: countries', () => {
  test('filterByName: should correctly filter countries by name', () => {
    const filteredCountries = countries.filterByName(mockCountries, 'an');

    expect(filteredCountries).toEqual([
      {
        population: 10000,
        name: {
          common: 'Antarctica',
        },
      },
      {
        population: 2000000,
        name: {
          common: 'Angola',
        },
      },
    ]);
  });

  test('filterByCountryPopulation: should correctly filter countries by population', () => {
    const filteredCountries = countries.filterByCountryPopulation(mockCountries, 2);

    expect(filteredCountries).toEqual([
      {
        population: 1000000,
        name: {
          common: 'Bermuda',
        },
      },
      {
        population: 10000,
        name: {
          common: 'Antarctica',
        },
      },
      {
        population: 2000000,
        name: {
          common: 'Angola',
        },
      },
    ]);
  });

  test('sortByCountryName: should correctly filter sort countries by name property', () => {
    const sortedCountriesAsc = countries.sortByCountryName(mockCountries);

    expect(sortedCountriesAsc).toEqual([
      {
        population: 2000000,
        name: {
          common: 'Angola',
        },
      },
      {
        population: 10000,
        name: {
          common: 'Antarctica',
        },
      },
      {
        population: 1000000,
        name: {
          common: 'Bermuda',
        },
      },
      {
        population: 23000000,
        name: {
          common: 'Sweden',
        },
      },
      {
        population: 40000000,
        name: {
          common: 'Ukraine',
        },
      },
    ]);

    const sortedCountriesDesc = countries.sortByCountryName(mockCountries, 'descend');

    expect(sortedCountriesDesc).toEqual([
      {
        population: 40000000,
        name: {
          common: 'Ukraine',
        },
      },
      {
        population: 23000000,
        name: {
          common: 'Sweden',
        },
      },
      {
        population: 1000000,
        name: {
          common: 'Bermuda',
        },
      },
      {
        population: 10000,
        name: {
          common: 'Antarctica',
        },
      },
      {
        population: 2000000,
        name: {
          common: 'Angola',
        },
      },
    ]);
  });

  test('paginateCountries: should correctly paginate countries', () => {
    const paginatedCountries = countries.paginateCountries(mockCountries, 2);

    expect(paginatedCountries).toEqual([
      {
        population: 40000000,
        name: {
          common: 'Ukraine',
        },
      },
      {
        population: 23000000,
        name: {
          common: 'Sweden',
        },
      },
    ]);
  });
});
