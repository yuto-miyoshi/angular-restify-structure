FROM node

WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY . .
ENTRYPOINT node /app/main.js

