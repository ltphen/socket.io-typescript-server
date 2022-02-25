FROM node:lts-alpine

# Set working directory
WORKDIR /var/www/html/back

# Install PM2 globally
RUN npm install --global pm2
RUN npm install --global webpack
RUN npm install --global concurrently

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./ ./

# Build app
RUN npm run build:release

# Expose the listening port
EXPOSE 5000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD ["npm", "start"]
