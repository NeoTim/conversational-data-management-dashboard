import express from 'express';
import sifsAPIPg from '@routes/sifs-api-pg/sifs-api-pg';

const router = express.Router();


router.use('/sifs-api-pg', sifsAPIPg);

// router.get('/sifs-api-pg', function (_, res) {
//   res.json({ users: [{ name: 'Tomy' }] });
// });

export default router;