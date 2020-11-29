FROM node:12

RUN npm install elastic-apm-node --save

EXPOSE 8080

CMD [ "node", "node.js" ]
