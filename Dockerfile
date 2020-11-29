FROM node:12

WORKDIR /usr/src/app

RUN npm install elastic-apm-node --save

EXPOSE 8080

CMD [ "node", "node.js" ]
