import { useState } from 'react';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/all';

const useGetCountries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(baseUrl);
      setCountries(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return { countries, getCountries };
};

export { useGetCountries };
