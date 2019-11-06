FROM node:12

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

ENV PATH /${APP_DIR}/node_modules/.bin:$PATH

COPY package.json /${APP_DIR}/package.json
COPY package-lock.json /${APP_DIR}/package-lock.json
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
