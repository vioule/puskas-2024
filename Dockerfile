FROM node:21.6.1

COPY . /puskas-2024
WORKDIR /puskas-2024
RUN npm i

EXPOSE 3000