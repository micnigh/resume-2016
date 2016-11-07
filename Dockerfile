FROM node:6

ADD ./ /app/
WORKDIR /app/
RUN npm install -g gulp typings bower
RUN npm install --unsafe-perm

ADD /docker/build/container/ /

# fix container file permissions
RUN true && \

    # scripts
    chown -R root:root /scripts/ && \
    chmod -R 770       /scripts/ && \
    chmod    771       /scripts/

ENTRYPOINT ["/scripts/docker-entrypoint.sh"]
CMD ["/scripts/build.sh"]
