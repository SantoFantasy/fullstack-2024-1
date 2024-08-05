FROM node:20.14.0-slim AS baseimg

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

ARG REACT_APP_BACKEND_URL=http://localhost:3000
FROM baseimg AS builder
WORKDIR /app
COPY --from=baseimg /app/node_modules /app
ADD public /app/public
ADD src /app/src
RUN npm run build

FROM baseimg
WORKDIR /app
RUN npm -g install serve
COPY --from=builder /app/build/ /app/build
EXPOSE 3000
CMD ["serve", "-s", "/app/build"]