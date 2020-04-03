
const express = require('express')
const app = express();

const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,  useFindAndModify: false  },
    () => {
        console.log('Connected to Db')
    })

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

//Import routes
const countriesRoute = require('./routes/countriesroute')
// Register the routes
app.use('/', countriesRoute);


const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`Listening on port ${port}`))    
