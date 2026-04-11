# Base image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose port (if needed for web/session tools)
EXPOSE 3000

# Start bot
CMD ["npm", "start"]
