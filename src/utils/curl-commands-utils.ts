import * as dotenv from 'dotenv';

dotenv.config();

const SIFS_API_KEY = process.env.SIFS_API_KEY;

const AVAILABILITY_API_COMMAND = `curl --connect-to "::gfe-wk.l.google.com" --header "Sec-Google-GFE-Restrict-Backends: shared-layer2-gfe=wk" "https://geoservicesinteractions-pa.googleapis.com/v1/availability:getAvailablePlaygroundApis?key=${SIFS_API_KEY}"`;

const PING_SERVER_API_COMMAND = `curl --connect-to "::gfe-wk.l.google.com" --header "Sec-Google-GFE-Restrict-Backends: shared-layer2-gfe=wk" "https://geoservicesinteractions-pa.googleapis.com/v1/ping:pingServer?key=${SIFS_API_KEY}"`;

export default {
  AVAILABILITY_API_COMMAND,
  PING_SERVER_API_COMMAND,
};
