FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i -g @angular/cli
RUN npm i
CMD ng serve --host 127.0.0.1
