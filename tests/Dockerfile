FROM node

WORKDIR /code/
ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json
RUN npm install

ADD ./features ./features
