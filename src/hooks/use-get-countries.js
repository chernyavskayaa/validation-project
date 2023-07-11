import { useState } from 'react';
import axios from 'axios';
import { utils } from '../utils';

const baseUrl = 'https://restcountries.com/v3.1/all';

const useGetCountries = ({ name, population, sortName, pagination }) => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(baseUrl);

      const filteredByNameData = utils.countries.filterByName(response.data, name);
      const filteredByPopulationData = utils.countries.filterByCountryPopulation(filteredByNameData, population);
      const sortedByNameData = utils.countries.sortByCountryName(filteredByPopulationData, sortName);
      const paginatedData = utils.countries.paginateCountries(sortedByNameData, pagination);

      console.log('paginatedData', paginatedData);

      setCountries(paginatedData);
    } catch (e) {
      console.log(e);
    }
  };

  return { countries, getCountries };
};

export { useGetCountries };
