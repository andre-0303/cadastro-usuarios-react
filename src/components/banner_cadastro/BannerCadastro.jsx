import React from "react";
import {ArrowDownOutline} from 'react-ionicons';
import ImgCadastro from '../../assets_copy/cadastrar_people.png';
import styles from './styles.module.css'
const BannerCadastro = () => {
    return ( 
        <div>
            <div id={styles.banner_cadastrar}>
                <img src={ImgCadastro} alt="img_banner" id={styles.img} />
                <ArrowDownOutline color={"#fff"} height={"40px"} width={"100px"} />
            </div>
        </div>
     );
}
 
export default BannerCadastro;