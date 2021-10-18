const express = require('express')
const app = express()

app.get('/api/todolist',(req, res)=>{
    const list = require('./todolist')
    res.json(list)
})

app.listen(3001, () => {
    console.log('--> Porta 3000 aberta no forjob')
},)