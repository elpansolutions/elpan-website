# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Install certbot and dependencies
RUN apk add --no-cache certbot certbot-nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy SSL auto-renewal script
COPY ssl-renew.sh /etc/periodic/daily/ssl-renew
RUN chmod +x /etc/periodic/daily/ssl-renew

# Expose ports
EXPOSE 80 443

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Start nginx with SSL configuration
CMD ["/start.sh"] 