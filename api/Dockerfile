
FROM node:21-alpine

# Create app directory
WORKDIR /app

# Copy package.json
COPY package.json /app

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy app
COPY . /app

# Build app
RUN npm run build

# expose port
EXPOSE 3000

# start app
ENTRYPOINT [ "npm", "start" ]
