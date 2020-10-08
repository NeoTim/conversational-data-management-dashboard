import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (_, res) {
  res.json({ users: [{ name: 'Tomy' }] });
});

export default router;
