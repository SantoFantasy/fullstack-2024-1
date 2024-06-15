FROM node:20.14.0-slim as baseimg

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM baseimg
WORKDIR /app
COPY --from=baseimg /app ./
CMD ["npm", "start"]