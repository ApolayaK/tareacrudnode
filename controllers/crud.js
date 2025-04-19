const conexion = require('../database/db');

// Insertar nuevo empleado
exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const fecha_ingreso = req.body.fecha_ingreso;
  const faltas = req.body.faltas;
  const cargo = req.body.cargo;

  // Verifica en consola si quieres ver los datos
  // console.log(nombre, direccion, telefono, fecha_ingreso, faltas, cargo);

  conexion.query('INSERT INTO empleados SET ?', 
  {
    nombre: nombre,
    direccion: direccion,
    telefono: telefono,
    fecha_ingreso: fecha_ingreso,
    faltas: faltas,
    cargo: cargo
  }, 
  (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/');
    }
  });
};

// Actualizar empleado
exports.update = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const fecha_ingreso = req.body.fecha_ingreso;
  const faltas = req.body.faltas;
  const cargo = req.body.cargo;

  conexion.query(
    'UPDATE empleados SET ? WHERE id = ?',
    [
      {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        fecha_ingreso: fecha_ingreso,
        faltas: faltas,
        cargo: cargo
      },
      id
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    }
  );
};


// Eliminar empleado
exports.delete = (req, res) => {
    const id = req.params.id;
  
    conexion.query('DELETE FROM empleados WHERE id = ?', [id], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    });
  };
  