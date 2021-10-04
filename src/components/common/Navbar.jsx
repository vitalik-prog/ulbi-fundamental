import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <Link to='/counters'>Counters</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
