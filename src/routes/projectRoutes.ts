import { Router } from 'express';
import { createProjectHandler, getAllProjectsHandler } from '../controllers/projectController';

const router = Router();

router.post('/projects', createProjectHandler);
router.get('/projects', getAllProjectsHandler);

export default router;
