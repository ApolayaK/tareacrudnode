const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Ruta para mostrar todos los empleados
router.get('/', (req, res) => {
  // Consulta SQL para obtener todos los registros de la tabla empleados
  conexion.query("SELECT * FROM empleados", (error, results) => {
    if (error) {
      throw error;
    } else {
      // Renderiza la vista 'index' y pasa los resultados a la vista
      res.render('index', { registros: results });
    }
  });
});

// Ruta para mostrar el formulario de registro de un nuevo empleado
router.get('/create', (req, res) => {
  res.render('create');
});

// Ruta para guardar un nuevo empleado
const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;
