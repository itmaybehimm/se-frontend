FROM node:20

WORKDIR /

COPY . .

RUN npm install

EXPOSE 8212

CMD ["npm", "start","--port","8212"]