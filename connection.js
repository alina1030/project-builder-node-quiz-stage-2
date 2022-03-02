const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yvzas.mongodb.net/quiz?retryWrites=true&w=majority`
const connexion = mongoose.connect(uri,connectionParams).then(()=>console.log("connected to cloud atlas"))
.catch((err)=>console.log(err));

module.exports = connexion