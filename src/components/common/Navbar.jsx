import React, {useContext} from 'react'
import {Link, useHistory} from "react-router-dom";
import styles from './styles.module.css';
import Button from "./Button";
import {AuthContext} from "../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const router = useHistory()

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
    if (!isAuth) {
      router.push('/login')
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <Button onClick={logout}>{isAuth ? 'Logout' : 'Login'}</Button>
        <Link to='/counters'>Counters</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
