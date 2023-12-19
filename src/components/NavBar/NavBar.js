import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <div className={styles.NavBar}>
      <Link to={"/"}><div className={styles.logo}>Waiter.app</div></Link>
      <Link to={"/"}><p className={styles.link}>Home</p></Link>
    </div>
  )
};

export default NavBar;