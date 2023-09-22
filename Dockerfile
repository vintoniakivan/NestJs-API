FROM node:18-alpine

WORKDIR /app
COPY package.* ./
RUN npm install

COPY ./dist ./dist
CMD ["npm", "run", "start:dev"]
