import { Input } from '../../components';
import { useEditFormValue, useGetCountries } from '../../hooks';

const Main = () => {
  const [name, changeName] = useEditFormValue('');
  const [population, setPopulation] = useEditFormValue(0);
  const [sortName, changeSortName] = useEditFormValue('');
  const [pagination, setPagination] = useEditFormValue(0);
  const { getCountries } = useGetCountries();

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
        label='Sort by (asc or desc, other values will be ignored)'
      />
      <Input id='pagination' value={pagination} onChange={setPagination} label='Paginate' type='number' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export { Main };
