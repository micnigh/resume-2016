FROM node:4

ADD package.json /app/package.json
WORKDIR /app/
RUN npm install

EXPOSE 3000-3100

ADD . /app/

CMD ["node", "server/index.js"]
