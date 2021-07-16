import express from 'express';

import { getPagiCollections, getPetangCollections } from '../controllers/collections.js';

const router = express.Router();

router.get('/pagi', getPagiCollections);
router.get('/petang', getPetangCollections);

export default router;