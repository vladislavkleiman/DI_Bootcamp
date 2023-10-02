const express = require('express')
const req = require('express/lib/request')
const app = express()

const data = [
    {id: '1', title: 'hi', content: 'Hello World!'},
    {id: '2', title: 'nodeJS', content: 'I love nodeJS'},
    {id: '3', title: 'JS', content: 'I love JS'},
    {id: '4', title: 'name', content: 'Vlad'},
]

//1
app.get('/',(req,res)=>{
    res.send(data)
})

//2
app.get('/id/:id',(req,res)=>{
    const id = req.params.id;
    const title = data.find(tit => tit.id === id)
    if (title) {
        res.json(title);
    } else {
        res.status(404).send('Not Found');
    }
})

//3
app.use(express.json())
app.post('/',(req,res)=>{
    const newTitle = {
        id: data.length + 1,
        title: req.body.title,
        content: req.body.name
    }
    data.push(newTitle)
    res.status(201).json(newTitle);
})

//4
app.use(express.json())
app.put('/id/:id',(req,res)=>{
    const id = req.params.id;
    const titleIndex = data.findIndex(tit => tit.id === id)
    if (titleIndex !== -1){
        const updateTitle = {
            id: data[titleIndex].id,
            title: req.body.title,
            content: req.body.name
        };
        data[titleIndex] = updateTitle;
        res.status(200).json("Title was update")
    }
})

//5
app.use(express.json())
app.delete('/id/:id',(req,res)=>{
    const id = req.params.id;
    const titleIndex = data.findIndex(tit => tit.id === id)
    if (titleIndex !== -1){
        data.splice(titleIndex,1)
        res.status(200).json("Title deleted")
    }
})


app.listen(3000, ()=>{
    console.log('Server is running');
})