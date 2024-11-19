FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

EXPOSE 4000

CMD ["npm", "run", "dev"]
