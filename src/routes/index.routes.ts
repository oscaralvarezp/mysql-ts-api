import { Router } from 'express';
const router = Router();

import indexController from '../controllers/index.controller';
const { indexWelcome } = indexController;

router.route('/')
    .get(indexWelcome);

export default router;