// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador de proyectos
import projectController from '../controllers/projectController';

// Crear la instancia del Router
const router = new Router();

/* ------- GET --------*/
// Listar proyectos
// GET: /projects/ | GET: /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registrar una idea de proyecto
// GET /projects/add
router.get('/add', projectController.add);

export default router;
