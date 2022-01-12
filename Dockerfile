FROM node:lts-stretch

WORKDIR /app

ADD ./src ./
ADD ./*.json ./
ADD ./yarn.lock ./

RUN yarn && yarn build 

CMD ["yarn", "start"]

