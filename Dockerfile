FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm install express
RUN npm install ejs
EXPOSE 3000/tcp
EXPOSE 3000/udp
ENTRYPOINT [ "node" ]
CMD [ "GTA_ArenaWar_Progression.js" ]