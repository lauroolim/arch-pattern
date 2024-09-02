FROM node:22

WORKDIR /app

COPY . .

RUN npm install

CMD ["tail", "-f", "/dev/null", "npm", "run", "start:dev"]
