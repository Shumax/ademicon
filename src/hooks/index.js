import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(index, value) {
    setValues({
      ...values,
      [index]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.name,
      event.target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
