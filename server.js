// External packages
const express = require('express');
const mongoose = require('mongoose');

// Variables to be used
const app = express();

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