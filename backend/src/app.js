const express = require('express');
const cors = require('cors')
const app = express();

//? Settings
app.set('port', 4000);
//? Middlewares

app.use(cors());
app.use(express.json());

//? Rutes
app.use('/api/users/', require('./routers/users.js'));
app.use('/api/notes/', require('./routers/notes.js'));


module.exports = app;