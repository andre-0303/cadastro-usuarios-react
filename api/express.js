const express = require('express');
const UserModel = require('./src/modules/use.model');
const app = express();

//habilitando o json
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:5173'
}))
//routes

app.get('/users', async(req, res) =>{
    try{
        const users = await UserModel.find({});
        return res.status(200).json(users);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.get('/users/:id', async(req, res) =>{
    try{
        const id = req.params.id;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) =>{
    try{
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    }
    catch(error){  
        return res.status(500).send(error.message);
    }
});

app.patch('/users/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(user);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async(req, res) =>{
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);
    }   
    catch(error){
        return res.status(500).send(error.message);
    }
});

const port = 5000;

app.listen(port, () => console.log("Rodando na porta", port))