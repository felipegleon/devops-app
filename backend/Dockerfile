FROM node:12.22.2-alpine

WORKDIR /app
COPY . .
ENV DATABASE_SERVER=database
RUN apk --no-cache add curl && \
    npm install && \
    yarn install --production
 
CMD  node app.js

