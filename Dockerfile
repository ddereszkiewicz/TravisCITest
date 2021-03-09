FROM node:alpine
WORKDIR /usr/src/express_app
COPY package.json package.json
RUN npm install
COPY ./ ./
EXPOSE 5000
CMD [ "node", "index.js" ]