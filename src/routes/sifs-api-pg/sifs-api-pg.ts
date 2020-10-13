import express from 'express';
import pgServices from '@services/sifs-api-pg-services';

const router = express.Router();

router.get('/param-check', async function (_, res) {
  res.json(await pgServices.processParameterCheckAPI());
});

router.post('/make-request', (req, res, next) => {
  try {
    res.json({response: "This is just mock data"});
  } catch (e) {
    next(e);
  }
});
export default router;
