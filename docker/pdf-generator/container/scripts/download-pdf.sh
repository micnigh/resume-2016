#!/bin/sh

# duplicate athenapdf `entrypoint.sh` variables in cron env
# see https://github.com/arachnys/athenapdf/blob/master/cli/entrypoint.sh
export PATH=/athenapdf/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export DISPLAY=:99

mkdir -p /app/.tmp/production/dist/download/
cd /app/.tmp/production/dist/download/

dockerize -timeout 300s -wait tcp://web:80

athenapdf --delay 2000 'http://web/' 'Michael-Nigh.pdf'
