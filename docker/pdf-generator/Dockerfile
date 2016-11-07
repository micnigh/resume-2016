FROM arachnysdocker/athenapdf

RUN apt-get update && \
    apt-get install -y \
      nano \
      cron \
      wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.2.0/dockerize-linux-amd64-v0.2.0.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.2.0.tar.gz

ADD container /

RUN find /scripts/ -type f -exec chmod 755 {} \; && \
    find /etc/cron.d/ -type f -exec chmod 755 {} \;

CMD /scripts/download-pdf.sh
