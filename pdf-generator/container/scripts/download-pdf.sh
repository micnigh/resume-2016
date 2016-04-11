#!/bin/sh

# duplicate athenapdf `entrypoint.sh` variables in cron env
# see https://github.com/arachnys/athenapdf/blob/master/cli/entrypoint.sh
export PATH=/athenapdf/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export DISPLAY=:99

cd /app/server/public/download/

athenapdf 'http://resume.mnigh.com/' 'Michael-Nigh.pdf'
