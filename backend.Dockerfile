FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY server/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY server .

# Create log directory
RUN touch /var/log/backend.log && \
    chmod 666 /var/log/backend.log

EXPOSE 3001

CMD ["node", "index.js"] 