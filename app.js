
// / Create server

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

let user = [
    
    {
        id: 1,
        first_name: 'Johnson',
        last_name: 'Ben',
        email: 'ben@gmail.com',
        phone_no: '+23458654',
        password: 'pass123'
    },
    {
        id: 2,
        first_name: 'Caroline',
        last_name: 'Peter',
        email: 'carol@gmail.com',
        phone_no: '+1244568',
        password: 'pass123'
    },
    {
        id: 3,
        first_name: 'Grace',
        last_name: 'John',
        email: 'john@gmail.com',
        phone_no: '+7862323',
        password: 'test'
    }
    
]

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/users', (req, res) => {
    res.send('This return all the users in the database', user);
});

app.get('/user', (req, res) => {
    // console.log(user[2].id)
    // console.log();
    const userId = req.query.id;
    // console.log(userId);
        return res.send(user[userId]);
    
})

app.post('/add', (req, res) =>{
    console.log(req.body);
    // res.send('this is post request')
})

app.put('/update', (req, res) =>{
    res.send('this put request')
})

app.delete('/delete', (req, res) =>{
    u = req.query.id;
    // Check if the user exist
    if (!user[u]) {
        return res.send('User not found');
    }
    
    return res.send(user[u]);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})

