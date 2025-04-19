const express = require('express');
const app = express();
const path = require('path'); 
const conexion = require('./database/db');
const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Indica la ubicación de las vistas

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);  // Usa las rutas definidas en router.js

app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
