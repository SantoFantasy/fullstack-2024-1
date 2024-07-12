FROM node:20.14.0-slim as baseimg

WORKDIR /app
COPY package.json package-lock.json tsconfig.json tsconfig.build.json ./
RUN npm ci

FROM baseimg as builder
WORKDIR /app
COPY --from=baseimg /app/ /app
COPY src/ ./src
RUN npm run build

FROM baseimg 
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start:prod"]