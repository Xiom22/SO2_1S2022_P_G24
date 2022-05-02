FROM node:14.16 as BS

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#nginx

FROM nginx:1.17.1-alpine

COPY --from=BS /app/dist/book-store /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
