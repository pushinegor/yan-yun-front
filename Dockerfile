FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN ENV ADMIN_API_URL="https://localhost:8080"" && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]