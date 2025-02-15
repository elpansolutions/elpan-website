# ELPAN Solutions Website

This repository contains the source code for the ELPAN Solutions website, a React-based frontend with a Node.js backend for handling contact form submissions.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Docker Deployment](#docker-deployment)
- [Direct Server Deployment](#direct-server-deployment)
- [Environment Variables](#environment-variables)
- [Common Operations](#common-operations)
- [Troubleshooting](#troubleshooting)

## Project Structure
```
elpan-website/
├── src/               # React frontend source code
├── server/            # Node.js backend code
├── public/            # Static assets
├── nginx.conf        # Nginx configuration
├── docker-compose.yml # Docker compose configuration
├── frontend.Dockerfile # Frontend container configuration
└── backend.Dockerfile  # Backend container configuration
```

## Prerequisites
- Node.js v16 or higher
- npm v8 or higher
- Docker and Docker Compose (for containerized deployment)
- Nginx (for direct server deployment)
- SSL certificates (for HTTPS)

## Docker Deployment

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/elpan-website.git
   cd elpan-website
   ```

2. Create environment file:
   ```bash
   cp server/.env.example server/.env
   # Edit .env with your email credentials and other settings
   ```

3. Start the containers:
   ```bash
   sudo docker compose up --build -d
   ```

### Docker Commands Reference

#### Basic Operations
```bash
# Start containers
sudo docker compose up -d

# Stop containers
sudo docker compose down

# Restart containers
sudo docker compose restart

# View logs
sudo docker compose logs

# View logs for specific service
sudo docker compose logs frontend
sudo docker compose logs backend

# Follow logs (real-time)
sudo docker compose logs -f
```

#### Maintenance Operations
```bash
# Rebuild containers after changes
sudo docker compose up --build -d

# Remove all containers and volumes
sudo docker compose down -v

# Check container status
sudo docker compose ps

# Execute command in container
sudo docker compose exec backend sh
sudo docker compose exec frontend sh
```

#### Update Deployment
```bash
# Pull latest code
git pull

# Rebuild and restart containers
sudo docker compose down
sudo docker compose up --build -d
```

## Direct Server Deployment

### Frontend Deployment
1. Build the frontend:
   ```bash
   cd elpan-website
   npm install
   npm run build
   ```

2. Configure Nginx:
   ```bash
   # Copy the built files to Nginx directory
   sudo cp -r build/* /var/www/elpan.in/

   # Copy and modify Nginx configuration
   sudo cp nginx.conf /etc/nginx/sites-available/elpan.in
   sudo ln -s /etc/nginx/sites-available/elpan.in /etc/nginx/sites-enabled/
   
   # Test and restart Nginx
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Backend Deployment
1. Set up the backend:
   ```bash
   cd server
   npm install
   
   # Create and edit environment variables
   cp .env.example .env
   nano .env
   ```

2. Run with PM2 (recommended for production):
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start the backend
   pm2 start index.js --name elpan-backend
   
   # Enable startup script
   pm2 startup
   pm2 save
   ```

## Environment Variables
Create `server/.env` with the following variables:
```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
ADMIN_EMAIL=admin@elpan.in
```

## Common Operations

### SSL Certificate Renewal
```bash
# For Docker deployment
sudo docker compose down
sudo certbot renew
sudo docker compose up -d

# For direct deployment
sudo certbot renew
sudo systemctl restart nginx
```

### Updating the Website
```bash
# Pull latest changes
git pull origin main

# For Docker deployment
sudo docker compose up --build -d

# For direct deployment
npm run build
sudo cp -r build/* /var/www/elpan.in/
cd server
pm2 restart elpan-backend
```

## Troubleshooting

### CORS Issues
1. Check the backend logs for the request origin:
   ```bash
   sudo docker compose logs backend
   # or
   pm2 logs elpan-backend
   ```

2. Add new origins to the allowedOrigins array in `server/index.js`

### Email Sending Issues
1. Verify SMTP settings in `.env`
2. Check backend logs for SMTP errors
3. Ensure Gmail "Less secure app access" is enabled or using App Password

### 404 Errors
1. Check nginx configuration
2. Verify API endpoints in frontend code
3. Ensure services are running:
   ```bash
   # Docker
   sudo docker compose ps
   
   # Direct deployment
   sudo systemctl status nginx
   pm2 status
   ```

### Container Issues
```bash
# Remove all containers and volumes (fresh start)
sudo docker compose down -v
sudo docker system prune -a
sudo docker compose up --build -d

# Check container logs
sudo docker compose logs -f
```

For additional support or issues, please contact the development team or create an issue in the repository.
