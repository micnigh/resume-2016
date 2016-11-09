#!/bin/bash
cd /app/
NODE_ENV=development npm install --unsafe-perm
rm -f /app/.tmp/production/dist/download/Michael-Nigh.pdf
NODE_ENV=production gulp watch &
while [ ! -f /app/.tmp/production/dist/download/Michael-Nigh.pdf ]; do sleep 1; done
pkill gulp
pkill node
