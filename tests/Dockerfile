FROM node

WORKDIR /code/

# add package.json into an empty directory so we can docker cache the install of the deps
ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json
RUN npm install

# Add the features to the image so that docker-compose can run them
ADD ./features ./features
