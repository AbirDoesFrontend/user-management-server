const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id : '1' , name : 'Abir' , email : 'abir@gmail.com' },
    { id : '2' , name : 'Borhsa' , email : 'Borsha@gmail.com' },
    { id : '3' , name : 'Roshogolla' , email : 'roshogolla@gmail.com' }
]

app.get('/' , (req , res) => {
    res.send('User Management Server')
})

app.get('/users', (req , res) => {
    res.send(users)
})

app.post('/users' , (req , res) => {
    console.log('Post api hitting')
    const newUser = req.body;
    newUser.id = users.length + 1;
    res.send(newUser)
})

app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})