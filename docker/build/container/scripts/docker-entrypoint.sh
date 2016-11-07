#!/bin/sh

# fix permissions
chmod +x /scripts/build.sh

sync # wait for filesystem changes to take effect - https://github.com/docker/docker/issues/9547#issuecomment-118682301
exec "$@"
