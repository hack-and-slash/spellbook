import React from 'react';
import { Formik } from 'formik';

interface SpellsSearchFormProps {
  updateSearchFilter: (name: string, type: string) => any;
}

const SpellsSearchForm = (props: SpellsSearchFormProps) => {
  return (
    <Formik initialValues={{ name: '', type: '' }} onSubmit={console.log}>
      {({ values, handleBlur, handleChange, handleSubmit }) => {
        props.updateSearchFilter(values.name, values.type);

        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="field"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Nome da magia"
            />
            <select
              name="type"
              className="field"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
            >
              <option value="">Tipo da magia</option>
              <option value="holy">Divina</option>
              <option value="arcane">Arcana</option>
            </select>
          </form>
        );
      }}
    </Formik>
  );
};

export default SpellsSearchForm;
