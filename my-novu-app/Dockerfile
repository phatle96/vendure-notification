FROM node:20

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --productions
COPY . .
RUN npm run build
# CMD ["npm", "start"]
# EXPOSE 4000