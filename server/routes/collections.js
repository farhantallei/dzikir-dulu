import express from 'express';

import { getCollection } from '../controllers/collections';

const router = express.Router();

router.get('/', getCollection);

export default router;