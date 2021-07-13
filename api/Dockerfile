# Build the development image. With the excerpt "AS development" we are also
# setting the build target (see ../docker-compose.yml).
FROM node:14 AS development

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

USER node
