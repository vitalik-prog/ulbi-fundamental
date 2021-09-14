import React from 'react'
import styles from './styles.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
      <input ref={ref} className={styles.input} {...props} />
    );
  }
)
export default Input;
