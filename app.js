const express = require('express');
const app = express();
const db = require('./connection');
const postModel = require('./postModel');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/',async(req,res)=>{
    const {question} = req.body;

    try{
        const newPost = await postModel.create({question});
        res.json(newPost)
    } catch(error){
        res.status(500).send(error)
    }
})

app.get('/',async(req,res)=>{
    try{
        const questions = await postModel.find();
        res.json(questions);
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const {question} = req.body;
    try{
        const post = await postModel.findByIdAndUpdate(id,{question});
        res.json(post)
    }catch(error){
        res.status(500).send(error)
    }
})

app.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    
    try{
        const post = await postModel.findById(id);
        await post.remove();
        res.json('deleted successfully')
    }catch(error){
        res.status(500).send(error)
    }
})


app.listen(3001, ()=>{
    console.log('Listening to 3001')
})