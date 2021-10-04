const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors())

const database = {
    users: {
        id: '123',
        email: 'johndoe@gmail.com',
        password: '27111980',
        entries: 0,
        joined: new Date()
}}

app.get('/', (_req, res)=> {
    res.send(database.users);
})

app.post('/login', (_req, res) => {
    if (_req.body.email === database.users.email && 
        _req.body.password === database.users.password) {
            res.json('success')
        } else {
            res.status(400).json('error logging in');
        }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})
