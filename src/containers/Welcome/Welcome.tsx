import React, { Component } from 'react';
import { Formik } from 'formik';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section>
        <Formik initialValues={{ class: '', level: '' }} onSubmit={console.log}>
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <select
                name="class"
                className="field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.class}
              >
                <option value="">Classe</option>
                <option value="cleric">Clérigo</option>
                <option value="mage">Mago</option>
              </select>
              <input
                type="number"
                name="level"
                className="field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.level}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </section>
    );
  }
}

export default Welcome;
