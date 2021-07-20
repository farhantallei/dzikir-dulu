import express from 'express';

import { getPagiCollections, getPetangCollections, getTidurCollections } from '../controllers/collections.js';

const router = express.Router();

router.get('/pagi', getPagiCollections);
router.get('/petang', getPetangCollections);
router.get('/tidur', getTidurCollections);

export default router;
