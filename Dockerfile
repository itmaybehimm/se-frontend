FROM node:20

WORKDIR /

COPY . .

RUN npm install

RUN npm install -g increase-memory-limit

RUN increase-memory-limit

EXPOSE 8212

CMD ["npm", "start","--port","8212"]