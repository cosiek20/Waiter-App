import { Spinner } from "react-bootstrap"
import styles from './Loading.module.scss';

const Loading = () => (
  <div className={styles.spinner}>
    <Spinner animation="border" />
  </div>
);

export default Loading;