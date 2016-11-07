#!/bin/bash
cd /app/
NODE_ENV=development npm install --unsafe-perm
NODE_ENV=production gulp watch &
sleep 300
