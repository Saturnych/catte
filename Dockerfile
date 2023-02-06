FROM node:18-alpine

RUN npm install -g npm
RUN npm install -g vite

# Working directory
WORKDIR /app

# Install dependencies
COPY .npmrc package*.json ./
RUN npm install .

# Copy source
COPY . .

# Start server
CMD npm run dev
