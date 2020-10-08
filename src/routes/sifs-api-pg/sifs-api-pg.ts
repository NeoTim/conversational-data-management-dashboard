
import express from 'express';
import pgServices from '@services/sifs-api-pg-services'
const router = express.Router();

router.get('/param-check', async function (_, res) {
  res.json(await pgServices.processParameterCheckAPI());
});

// router.get('/', function (_, res) {
//   res.json({ users: [{ name: 'Tom' }] });
// });

export default router;
