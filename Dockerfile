FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3333