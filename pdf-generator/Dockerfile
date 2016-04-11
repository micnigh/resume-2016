FROM arachnysdocker/athenapdf

RUN apt-get update && \
    apt-get install -y \
      nano \
      cron && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD container /

RUN find /scripts/ -type f -exec chmod 755 {} \; && \
    find /etc/cron.d/ -type f -exec chmod 755 {} \;

CMD /scripts/download-pdf.sh && cron -f
