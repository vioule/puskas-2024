FROM node:21.6.1

COPY . /root/puskas-2024
WORKDIR /root/puskas-2024
RUN npm i

EXPOSE 3000