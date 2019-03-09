# Base image
FROM node:alpine

WORKDIR /usr/mean-template

# Install some dependencies
COPY ./ ./
RUN apk --update add redis
RUN npm install

# Default command
CMD ["npm", "start" ]
