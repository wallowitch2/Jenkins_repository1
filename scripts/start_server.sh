#!/bin/bash
cd /var/www/my-nodejs-app
nohup node index.js > /dev/null 2>&1 &