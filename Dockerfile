FROM node:8

RUN npm install -g gulp typings bower

RUN mkdir -p /app/
ADD ./package.json /app/package.json
ADD ./bower.json /app/bower.json
ADD ./.bowerrc /app/.bowerrc
ADD ./typings.json /app/typings.json
ADD ./gulpfile.postinstall.js /app/gulpfile.postinstall.js
ADD ./gulpfile.transpile.js /app/gulpfile.transpile.js
ADD ./tsconfig.sample.json /app/tsconfig.sample.json
ADD ./npm-scripts/ /app/npm-scripts/
WORKDIR /app/
RUN npm install --unsafe-perm

ADD ./ /app/

ADD /docker/build/container/ /

# fix container file permissions
RUN true && \

    # scripts
    chown -R root:root /scripts/ && \
    chmod -R 770       /scripts/ && \
    chmod    771       /scripts/

ENTRYPOINT ["/scripts/docker-entrypoint.sh"]
CMD ["/scripts/build.sh"]
