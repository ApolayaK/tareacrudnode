const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'empresa' 
});

conexion.connect((error) => {
  if (error) {
    console.error(`Error en la conexión: ${error}`);
    return;
  }

  console.log('Conectado correctamente a la base de datos "empresa"');
});

// Exportarlo
module.exports = conexion;
