const express = require('express')
const path = require('path')
const app = express()
const {v4} = require('uuid')




let HABBITS = [
    {id:v4(),name:'Пить воду',value:'10 стаканов в день',marked:false}
]

app.use(express.json())
//GET
app.get('/api/habbits', (req,res) => {
    res.status(200).json(HABBITS)
})

//POST

app.post('/api/habbits', (req,res) => {
    const habbit = {...req.body,id:v4(), marked:false}
    HABBITS.push(habbit)
    res.status(201).json(habbit)
})

// DELETE
app.delete('/api/habbits/:id', (req, res) => {
    HABBITS = HABBITS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'привычка удалена'})
  })
  
  // PUT
  app.put('/api/habbits/:id', (req, res) => {
    const idx = HABBITS.findIndex(c => c.id === req.params.id)
    HABBITS[idx] = req.body
    res.json(HABBITS[idx])
  })



app.use(express.static(path.resolve(__dirname,'client')))

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','index.html'))
})

app.listen(3000, () => console.log('server started on ::3000 ...'))