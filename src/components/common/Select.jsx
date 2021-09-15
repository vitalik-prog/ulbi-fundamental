import styles from './styles.module.css';
import React from "react";

const Select = ({ options, defaultValue, value, onHandleChange }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onHandleChange}
    >
      <option disabled value=''>{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
}

export default Select;
