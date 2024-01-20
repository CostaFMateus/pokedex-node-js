const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = require('http').Server( app );

mongoose.connect('mongodb+srv://devmateus:mateusdev@cluster0.begbuw8.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection
.once('open', () => console.log('Mongoose Connected!'))
.on('error', ( error ) => {
  console.log('Error: ', error );
});

app.use( cors());
app.use( express.json());
app.use( routes );

server.listen(3333);
