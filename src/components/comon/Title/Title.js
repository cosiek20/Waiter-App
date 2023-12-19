import styles from './Title.module.scss';

const Title = props => (
  <h1 className={styles.header}>{props.children}</h1>
);

export default Title;