const express = require('express');
const data = require('./data.json')

const app = express();
const port = 5000;
app.use(express.json())

app.get('/', (req,res)=>{
    res.header("Content-Type",'application/json');
    res.json(data);
})

app.listen(port,()=>{
    console.log("server started");
})