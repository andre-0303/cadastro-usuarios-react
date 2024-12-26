import React from "react";
import { useState } from "react";
import styles from './styles.module.css';
const Form = ({item, visibleForm}) => {

    const [data, setData] = useState({
        image: item.image,
        completeName: item.completeName,
        email: item.email,
        idade: item.idade,
    })
    const alterar = async (e) => {
        e.preventDefault();
        const confirmAlter = confirm("Deseja alterar os dados?");

        if(confirmAlter === true && data.image !== '' && data.completeName !== '' && data.email !== ''
            && data.idade !== ''){
                const newObject = data;
                await fetch(`http://localhost:5000/users/${item._id}`, {
                    method:"PATCH",
                    headers:
                    {
                         'Content-Type':'application/json'
                    },
                    body:JSON.stringify(newObject)
                })
                .then((response) => response)
                .then((data) => data)
                .catch((error) => console.log(error))
        }
       else{
        return;
       }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]:value
        })
    }
    return ( 
        <form id={styles.form} style={visibleForm ? {display:"block"} : {display:"none"}}>
          <label htmlFor="image">Image</label>
            <input type="text" name="image" placeholder="Imagem do usuário"
            value={data.image} onChange={handleChange}
            />
        
            <label htmlFor="completeName">Nome completo</label>
            <input type="text" name="completeName" placeholder="Nome do usuário" 
            value={data.completeName} onChange={handleChange}
            />
          
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email do usuário"
            value={data.email} onChange={handleChange}
            />
            
            <label htmlFor="idade">Idade</label>
            <input type="number" placeholder="Idade do usuário" name="idade"
            value={data.idade} onChange={handleChange}
            />
            <button onClick={alterar} id={styles.alterar}>Cadastrar Usuário</button>
         
        </form>
    );
}
 
export default Form;