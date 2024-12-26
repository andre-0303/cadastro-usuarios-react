import React, { useState } from "react";
import styles from './style.module.css';
import Form from "../alterar/Form";

const User = ({item}) => {
    const [visibleForm, setVisibleForm] = useState(false);
    const deletar = async () => {
        const confirmarDelecao = confirm("Deseja mesmo deletar esse registro?")
        if(confirmarDelecao){
           await fetch(`http://localhost:5000/users/${item._id}`, {
                method: "DELETE",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response) => response)
            .then((data) => data)
            .catch((error) => console.log(error))
        }else{
            alert("Tente novamente!")
        }
       
    }
    function visibleFormModif(){
        setVisibleForm(!visibleForm);
     }
    
    return ( 
        <div key={item._id} className={styles.user}>
            <div className={styles.content}>
                 <img src={item.image} alt="image_usuario"/>
            <div className={styles.texts}>
                <h2>Nome: {item.completeName}</h2>
                <h2>Email: {item.email}</h2>
                <h2>Idade: {item.idade}</h2>
            </div>
            </div>
            <div className={styles.buttons}>
                <button id={styles.alterar} onClick={visibleFormModif}>{visibleForm ? 'Voltar' : 'Alterar registro'}</button>
                <button id={styles.deletar} onClick={deletar}>Deletar registro</button>
            </div>
            <Form item={item} visibleForm={visibleForm} />
        </div>      
     );
}
 
export default User;