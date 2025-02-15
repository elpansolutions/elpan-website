# Frontend build stage
FROM node:18-alpine as frontend-build

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package files
COPY package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy frontend source code
COPY . .

# Build the frontend
RUN npm run build

# Backend build stage
FROM node:18-alpine as backend-build

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package files
COPY server/package*.json ./

# Install backend dependencies
RUN npm ci

# Copy backend source code
COPY server .

# Production stage
FROM nginx:alpine

# Install Node.js in the final stage
RUN apk add --update nodejs npm

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy frontend built files
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html

# Create backend directory
WORKDIR /app/backend

# Copy backend files
COPY --from=backend-build /app/backend/node_modules ./node_modules
COPY --from=backend-build /app/backend/package*.json ./
COPY --from=backend-build /app/backend/index.js ./

# Copy environment variables
COPY server/.env ./

# Expose ports
EXPOSE 80 443 3001

# Start both nginx and node server
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"] 