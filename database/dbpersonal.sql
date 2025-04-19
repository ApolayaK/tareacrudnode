CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;

-- Crear tabla con 7 campos
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,     
    nombre VARCHAR(100) NOT NULL,          
    direccion VARCHAR(150) NOT NULL,       
    telefono VARCHAR(20) NOT NULL,         
    fecha_ingreso DATE NOT NULL,           
    faltas INT DEFAULT 0,                 
    cargo VARCHAR(50) NOT NULL            
);

-- Insertar un registro de prueba
INSERT INTO empleados (nombre, direccion, telefono, fecha_ingreso, faltas, cargo)
VALUES (
    'María Pérez',
    'Av. Los Olivos 123, Lima',
    '987654321',
    '2023-08-15',
    2,
    'Diseñadora Gráfica'
);


SELECT * FROM empleados;

DROP DATABASE empresa;