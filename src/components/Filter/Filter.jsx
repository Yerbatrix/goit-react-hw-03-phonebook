import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
