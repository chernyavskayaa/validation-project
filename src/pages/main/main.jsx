import { Input } from '../../components';
import { useEditFormValue, useGetCountries } from '../../hooks';

const Main = () => {
  const [name, changeName] = useEditFormValue('');
  const [population, setPopulation] = useEditFormValue(0);
  const [sortName, changeSortName] = useEditFormValue('ascend');
  const [pagination, setPagination] = useEditFormValue(20);
  const { getCountries, countries } = useGetCountries({ name, population, sortName, pagination });

  const handleSubmit = (event) => {
    event.preventDefault();

    getCountries();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input id='name' value={name} onChange={changeName} label='Filter by Country Name' />
      <Input id='population' value={population} onChange={setPopulation} label='Country Population (in millions)' type='number' />
      <Input
        id='sortName'
        value={sortName}
        onChange={changeSortName}
        label='Sort by (ascend or descend, other values will be ignored)'
      />
      <Input id='pagination' value={pagination} onChange={setPagination} label='Paginate' type='number' />
      <button type='submit'>Submit</button>

      {countries?.length ? (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
};

export { Main };
