import React from "react";
import styles from './styles.module.css';
import BannerImg from '../../assets_copy/people.jpg';
const Banner = () => {
    return ( 
        <div id={styles.banner}>
            <div id={styles.content}>
                <h1>Cadastro de Usuários</h1>
                <img src={BannerImg} alt="banner" id={styles.bannerImg}/>
            </div>
        </div>
     );
}
 
export default Banner;