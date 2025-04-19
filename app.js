const express = require('express');
const app = express();
const path = require('path'); 
const conexion = require('./database/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.use('/', require('./router')); 

app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
