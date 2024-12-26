import React from "react";
import styles from './style.module.css';
import { useState, useEffect } from "react";

const FormCadastro = () => {
    const [data, setData] = useState({
        image: '',
        completeName:'',
        email:'',
        idade:'',
    });

        const [visibleWarningImg, setVisibleWarningImg] = useState(false);
        const [visibleWarningCompleteName, setVisibleWarningCompleteName] = useState(false);
        const [visibleWarningEmail, setVisibleWarningEmail] = useState(false);
        const [visibleWarningIdade, setVisibleWarningIdade] = useState(false);

    const handleChange = (e) =>{
        const {value, name} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    console.log(data.image, data.completeName, data.email, data.idade);

    function validationButton(){
        if(data.image === '' || data.completeName === '' || data.email === '' || data.idade === ''){
            return true     
        } 
        return false;
    }

    useEffect(() =>{
        const validImg = () =>{
            if(data.image === ''){
                setVisibleWarningImg(true);
            }
            else{
                return setVisibleWarningImg(false);
            }
        }
        const validCompleteName = () =>{
            if(data.completeName === ''){
                setVisibleWarningCompleteName(true);
            }
            else{
                return setVisibleWarningCompleteName(false);
            }
        }
        const validEmail = () =>{
            if(data.email === ''){
                setVisibleWarningEmail(true);
            }
            else{
                return setVisibleWarningEmail(false);
            }
        }
        const validIdade = () =>{
            if(data.idade === ''){
                setVisibleWarningIdade(true);
            }
            else{
                return setVisibleWarningIdade(false);
            }
        }
        validImg();
        validCompleteName();
        validEmail();
        validIdade();
    }, [data.image, data.completeName, data.email, data.idade]);

    const cadastrar = async(e) =>{
        e.preventDefault();
        const confirmar = confirm("Deseja mesmo salvar esses dados?");

        if(confirmar === true && data.image !== '' && data.completeName !== '' && data.email !== '' && data.idade !== ''){
            const newObject = data;
            await fetch('http://localhost:5000/users', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newObject)
            })
            .then((response) => response)
            .then((data) => data)
            .catch((error) => console.log(error)) 

            setData({
                image:'',
                completeName:'',
                email:'',
                idade:''
            })
            alert("Cadastro concluido")
        }
        return;
    }
    return (  
            <form id={styles.formCadas}>
            <label htmlFor="image">Imagem</label>
            <input type="text" name="image" placeholder="Imagem do Usuário"
            value={data.image} onChange={handleChange}    
            />
            {visibleWarningImg && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="completeName">Nome Completo</label>
            <input type="text"name="completeName" placeholder="Nome do usuário"
            value={data.completeName} onChange={handleChange}   
            />
             {visibleWarningCompleteName && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email do usuário"
            value={data.email}  onChange={handleChange}  
            />
             {visibleWarningEmail && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="idade">Idade</label>
            <input type="number" name="idade" placeholder="Idade do usuário"
            value={data.idade} onChange={handleChange}    
            />
             {visibleWarningIdade && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <button disabled={validationButton()} onClick={cadastrar}>Cadastrar Usuário</button>
        </form>
    );
}
 
export default FormCadastro;