import { Link } from 'react-router-dom';
import styles from './Table.module.scss';
import Button from 'react-bootstrap/Button';

const Table = ({ id, status }) => {

  return(
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1>Table {id}</h1>
        <p><span>Status: </span>{status}</p>
      </div>

      <Button variant="primary" as={Link} to={`/table/${id}`}>Show more</Button>{' '}
    </div>
  )
}

export default Table;