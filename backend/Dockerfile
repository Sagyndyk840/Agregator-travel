FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG NODE_ENV=4000
ENV NODE_ENV=$NODE_ENV

EXPOSE ${NODE_ENV}

CMD ["npm", "run", "dev"]
