#!/bin/sh
cd ./client ; ng build --prod ; cd ..
npm run build
gcloud app deploy