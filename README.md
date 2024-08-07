# Pasos para iniciar el proyecto

Esta es una aplicación backend para gestionar tareas, construida con Node.js, Express y MySQL.


1. Clonar el repositorio:
    ```bash
    git clone https://github.com/MirnaFranco/crud_tasks_backend.git
    
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configurar la base de datos MySQL:

    - Crea la base de datos y la tabla ejecutando las siguientes consultas SQL:
        ```sql
        CREATE DATABASE tasks_db;

        USE tasks_db;

        CREATE TABLE tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            isComplete BOOLEAN NOT NULL
        );

    

## Uso

 Ejecutar el servidor:
```
npm run dev
```
