import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { use } from "react";
import User from "../user/User";
const Users = () => {
    const [data, setData] = useState([

    ]);
    useEffect(() =>{
        fetch('http://localhost:5000/users', {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    })
    return ( 
        <div id={styles.container}>
            <div id={styles.texts}>
                <h1>Esses são os usuários cadastrados no sistema</h1>
                <p>Você pde alterar ou remover um registro</p>
            </div>
            <div id={styles.users}>
                {
                    data.length > 0 ? data.map((item) =>(
                        <User item={item} key={item._id}/>
                    )) :
                    <p>Não há nenhum registro no sistema</p>
                }
            </div>
        </div>
     );
}
 
export default Users;
