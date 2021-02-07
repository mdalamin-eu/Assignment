const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()
const morgan = require("morgan")
const Posts= require('./controllers/Posts')
var cors=require('cors');

app.use(cors({credentials:true, origin:true}));
app.options('*', cors());

require('dotenv').config();

app.use(morgan());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.post('/addpost', Posts.post);
app.get('/alldata', Posts.getAllPosts);

mongoose.connect(process.env.DATABASE_CLOUD,{userNewurlParser:true})
.then(()=>console.log('DB connected'))
.catch((err)=>console.log(err))
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`My server running on ${port}`)
})