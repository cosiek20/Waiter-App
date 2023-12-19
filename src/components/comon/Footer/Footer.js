import { Navbar } from "react-bootstrap";
import styles from './Footer.module.scss'
import clsx from 'clsx';

const Footer = () => (
  <Navbar sticky="bottom" className={clsx("fixed-bottom justify-content-center", styles.footer)} >Copyright &copy; PizzeriaApp 2023</Navbar>
);

export default Footer;