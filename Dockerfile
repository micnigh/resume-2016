FROM node:4

ADD . /app/

WORKDIR /app/

RUN npm install --production

EXPOSE 80
EXPOSE 443

CMD ["node", "server/index.js"]
