import { useState } from 'react';

const useEditFormValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};

export { useEditFormValue };
