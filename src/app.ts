import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import users from '@routes/users';
import routes from '@routes/routes';
import util from 'util';
import { exec } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config();
const execute = util.promisify(exec);
const SIFS_API_KEY = process.env.SIFS_API_KEY;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  express.static(
    process.cwd() + '/client/dist/conversational-data-management-dashboard/'
  )
);

app.use(function (_, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (_, res) => {
  res.sendFile(
    process.cwd() +
      '/client/dist/conversational-data-management-dashboard/index.html'
  );
});

app.use('/api/v1/users', users);
app.use('/api', routes);
app.use(express.json());
app.post('/api/test', async (req, res, next) => {
  try {
    const response = await execute(
      `curl --connect-to "::gfe-wk.l.google.com" --header "Sec-Google-GFE-Restrict-Backends: shared-layer2-gfe=wk" "https://geoservicesinteractions-pa.googleapis.com/v1/availability:getAvailablePlaygroundApis?key=${SIFS_API_KEY}"`
    );
    res.json(JSON.parse(response.stdout));
  } catch (e) {
    next(e);
  }
});

app.get('/api/ping', async (req, res, next) => {
  try {
    const response = await execute(
      `curl --connect-to "::gfe-wk.l.google.com" --header "Sec-Google-GFE-Restrict-Backends: shared-layer2-gfe=wk" "https://geoservicesinteractions-pa.googleapis.com/v1/ping:pingServer?key=${SIFS_API_KEY}"`
    );
    res.json(JSON.parse(response.stdout));
  } catch (e) {
    next(e);
  }
});

export default app;
