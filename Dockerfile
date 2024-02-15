FROM node:20.11.0

COPY . /root/puskas-2024
WORKDIR /root/puskas-2024
RUN npm i

EXPOSE 3000