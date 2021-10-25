# STEP 2 : build
FROM node:12.22.2-alpine as build-stage

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV BACKEND_SERVER=localhost
RUN npm run build --prod

# STEP 2 : Production
FROM nginx:1.12-alpine
RUN apk --no-cache add curl
COPY --from=build-stage /app/dist/mean /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]
