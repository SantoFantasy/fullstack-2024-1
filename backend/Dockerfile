FROM node:20.14.0-slim as baseImg

WORKDIR /app
COPY package.json .
RUN npm install

FROM baseImg
COPY . .
CMD ["npm", "start"]