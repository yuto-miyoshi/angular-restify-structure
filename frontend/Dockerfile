# angular build
FROM node as build-content-stage

WORKDIR /content
COPY package*.json /content/
RUN npm install

COPY . /content
RUN npm run build

# server setting
FROM nginx

COPY --from=build-content-stage /content/dist /usr/share/nginx/html
COPY /proxy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200