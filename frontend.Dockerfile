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

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/build /usr/share/nginx/html

# Ensure proper permissions for nginx html directory
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Create log directories
RUN mkdir -p /var/log/nginx && \
    touch /var/log/nginx/api_error.log /var/log/nginx/api_access.log && \
    chmod 666 /var/log/nginx/api_error.log /var/log/nginx/api_access.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"] 