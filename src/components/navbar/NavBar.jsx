import React from "react";
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import Logo from '../../assets_copy/logo1.png';
const NavBar = () =>{
    return(
        <nav style={styles.nav}>
        <img src={Logo} alt="logo" id={styles.logo}/>
        <div id={styles.links}>
        <Link to={'/'} className={styles.link}>Home</Link>
        <Link to={'/cadastrar'} className={styles.link}>Cadastrar</Link>
        </div>
        </nav>
    )
}

export default NavBar;