FROM node:12

RUN npm init -y && npm install elastic-apm-node --save

COPY . ./

EXPOSE 8080

CMD [ "node", "node.js" ]
