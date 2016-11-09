
[resume.mnigh.com](http://resume.mnigh.com)

[micnigh.github.io/resume/](https://micnigh.github.io/resume/)

# Requirements/Recommended

 - [node] `v6+`
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
# build static site
docker-compose build && \
docker-compose up --force-recreate

# test website using nginx
docker run -it --rm=true -v /$PWD/.tmp/production/dist/://usr/share/nginx/html/:ro -p 80:80 nginx

# publish - note, very slow first time
npm run deploy

```

# Misc

## Generating PDFs

Chrome has always made the best looking PDFs - and thanks to [athenapdf] and [docker] we can generate these automatically :)

See `pdf-generator` dir for details

## Todos

- upgrade gulp-watch when next version is pushed.  v4.3.5 crashes when deleting a directory.  `v4.2.5` is working until then.
  - https://github.com/floatdrop/gulp-watch/issues/187
  - https://github.com/floatdrop/gulp-watch/commit/678a8f19fdaf1416b49f40da980b7471dea5e4c6
- improve rendering performance
  - custom fonts are very slow to load, partially due to them loading after images load.
  - lots of images download on first request, mostly `.svg` icons;  look into combining them into a spritesheet.  See [gulp-svg-sprite]
  - async load javascript in parallel - order must be `lib.js` then `app.js`

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
[lets-encrypt]: https://letsencrypt.org/
[gulp-svg-sprite]: https://github.com/jkphl/gulp-svg-sprite
