const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = require('http').Server( app );

mongoose.connect('mongodb+srv://ridam:5533@cluster0.gtsrp.mongodb.net/pokedex?retryWrites=true&w=majority');

mongoose.connection
.once('open', () => console.log('Mongoose Connected!'))
.on('error', ( error ) => {
  console.log('Error: ', error );
});

app.use( cors());
app.use( express.json());
app.use( routes );

server.listen(3333);
