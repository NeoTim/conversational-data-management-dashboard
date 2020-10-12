import express from 'express';
import sifsAPIPg from '@routes/sifs-api-pg/sifs-api-pg';

const router = express.Router();

router.use('/sifs-api-pg', sifsAPIPg);

export default router;
