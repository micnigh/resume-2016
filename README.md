[resume.mnigh.com](http://resume.mnigh.com)

# Requirements/Recommended

 - [node] `v4+`
 - [atom]
    - Packages
      - [atom-typescript]
      - [atom-lint]
      - [linter-tslint]
 - [docker]

# Quick start

```bash
# first time
npm install -g gulp typings bower
npm install

# every time
gulp --gulpfile gulpfile.transpile.js watch
gulp watch
```

# Features

 - [typescript] - javascript type support
 - [gulp] - automated build system

# Deployment

```bash
#
# connect docker via docker-machine to remote VPS
# then run below
#
gulp --gulpfile gulpfile.transpile.js build && \
NODE_ENV=production gulp build && \
docker-compose -f docker-compose.production.yml build && \
docker-compose -f docker-compose.production.yml up --force-recreate -d

```

## connecting to resume.mnigh.com through docker-machine

```bash
# connect to VPS at `resume.mnigh.com` as `resume.mnigh.com`, must have passwordless root access
docker-machine create \
  --driver=generic \
  --generic-ip-address=resume.mnigh.com \
  --generic-ssh-user=root \
  --generic-ssh-key=$HOME/.ssh/id_rsa \
  resume.mnigh.com

# connect to machine
eval $(docker-machine env resume.mnigh.com)

```

## npm and low memory

On low memory VPS, such as 512MB node, NPM will need more memory.  If you have free disk space, you can enable swap

https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04

```bash
# enable 4GB swapfile
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

```

# Misc

## Generating PDFs

Chrome has always made the best looking PDFs - and thanks to [athenapdf] and [docker] we can generate these automatically :)

See `pdf-generator` dir for details

## Todos

- update [nginx-proxy] once docker-compose v2 is officially supported - see https://github.com/jwilder/nginx-proxy/issues/304
  - atm using a custom version of nginx proxy with support for VIRTUAL_PATH
  - switch to shared volume with nginx image and docker-gen image - for security
- while upgrading [nginx-proxy], also research [let-encrypt] for free https encryption
- upgrade gulp-watch when next version is pushed.  v4.3.5 crashes when deleting a directory.  `v4.2.5` is working until then.
  - https://github.com/floatdrop/gulp-watch/issues/187
  - https://github.com/floatdrop/gulp-watch/commit/678a8f19fdaf1416b49f40da980b7471dea5e4c6

---

[node]: https://nodejs.org/
[atom]: https://atom.io/
[atom-typescript]: https://atom.io/packages/atom-typescript
[gulp]: http://gulpjs.com/
[typescript]: http://www.typescriptlang.org/
[backbone]: http://backbonejs.org/
[tsd]: http://definitelytyped.org/tsd/
[tslint]: http://palantir.github.io/tslint/
[atom-lint]: https://atom.io/packages/atom-lint
[linter-tslint]: https://atom.io/packages/linter-tslint
[es5-shim]: https://github.com/es-shims/es5-shim
[webpack]: https://webpack.github.io/
[docker]: https://www.docker.com/
[athenapdf]: https://github.com/arachnys/athenapdf
[nginx-proxy]: https://github.com/jwilder/nginx-proxy/
[let-encrypt]: https://letsencrypt.org/
