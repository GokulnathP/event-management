// External packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Route imports
const userRoutes = require('./routes/user');

// Variables to be used
const app = express();

// Middlewares setup
// Json input parsing
app.use(bodyParser.json());

// Routes

app.use('/user', userRoutes);

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
    next();
})

// MongoDB And Server connection
const PORT = process.env.PORT || 5000;
mongoose.connect(
    'mongodb+srv://event:testevent@cluster0-dsfbd.mongodb.net/eventmanagement?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log('Server started at ', PORT));
}).catch(err => console.log('[MongoDB] ', err));