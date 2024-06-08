FROM node:21.5.0-alpine3.15 as baseImg

WORKDIR /app
COPY package.json .
RUN npm install

FROM baseImg
COPY . .
CMD ["npm", "start"]