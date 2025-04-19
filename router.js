const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Ruta para mostrar los empleados
router.get('/', (req, res) => {
  conexion.query("SELECT * FROM empleados", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error en la base de datos");
    }
    // Renderiza la vista 'index' y pasa los datos (empleados)
    res.render('index', { registros: results });
  });
});

// Ruta para crear nuevos empleados
router.get('/create', (req, res) => {
  res.render('create');
});

// SAVE
const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;

// DELETE
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM empleados WHERE id = ?', [id], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    });
  });

  // Mostrar EDIT
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM empleados WHERE id = ?', [id], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render('edit', { empleado: results[0] });
      }
    });
  });
  
  //editar
  router.post('/update', crud.update);
