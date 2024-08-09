import  express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tareas.routes.js';

const app = express();

app.use(bodyParser.json());

app.use('/api', taskRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
