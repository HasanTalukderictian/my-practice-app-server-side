const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT ||5000;

const users = [
    
        {id:1, name: "Fahim", email:"Fahim@gmail.com", mobile:'01768938948'},
        {id:2, name: "Hasan", email:"Hasan@gmail.com", mobile:'01769938948'},
        { id:3, name: "Ratul", email:"Ratul@gmail.com", mobile:'01767938948'},
        {id:4, name: "Ratul", email:"Ratul@gmail.com", mobile:'01767938948'},

    
]

//middleware 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Running')
})

app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`)
})