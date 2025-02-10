# Elpan Website - Production Deployment Guide

## Overview
This guide provides detailed instructions for deploying and managing the Elpan website in a production environment using Docker, Nginx, and Let's Encrypt SSL.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Initial Setup](#initial-setup)
- [Deployment](#deployment)
- [SSL Management](#ssl-management)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)
- [Security Best Practices](#security-best-practices)

## Prerequisites
- Rocky Linux server
- Docker installed
- Domain name with DNS configured
- Ports 80 and 443 open in firewall
- Git installed

## Project Structure 
elpan-website/
├── Dockerfile # Multi-stage Docker build file
├── nginx.conf # Nginx configuration
├── ssl-renew.sh # SSL certificate renewal script
├── start.sh # Container startup script
├── src/ # React application source
└── README.md # This documentation

Install Docker on Rocky Linux
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker

Open required ports
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

### 2. Configuration Files Setup
Before deployment, update the following files with your domain and email:

1. In `nginx.conf`:
```nginx
server_name your-domain.com;  # Replace with your domain
```

2. In `start.sh`:
```bash
--email your-email@example.com \  # Replace with your email
-d your-domain.com               # Replace with your domain
```

## Deployment

### First-time Deployment

1. Clone the repository:
```bash
git clone <repository-url>
cd elpan-website
```

2. Build and deploy:
```bash
# Build Docker image
docker build -t elpan-website:latest .

# Create persistent volume for SSL certificates
docker volume create letsencrypt

# Run container
docker run -d \
  --name elpan-website \
  -p 80:80 \
  -p 443:443 \
  -v letsencrypt:/etc/letsencrypt \
  --restart unless-stopped \
  elpan-website:latest
```

### Updating the Application

1. Pull latest changes:
```bash
git pull origin main
```

2. Rebuild and redeploy:
```bash
# Build new image
docker build -t elpan-website:latest .

# Stop and remove old container
docker stop elpan-website
docker rm elpan-website

# Run new container
docker run -d \
  --name elpan-website \
  -p 80:80 \
  -p 443:443 \
  -v letsencrypt:/etc/letsencrypt \
  --restart unless-stopped \
  elpan-website:latest
```

## SSL Management

### Automatic SSL Setup
- SSL certificates are automatically obtained during first deployment
- Renewal is checked daily via cron job

### Manual SSL Operations
```bash
# Check certificate status
docker exec elpan-website certbot certificates

# Force renewal
docker exec elpan-website certbot renew --force-renewal

# Backup certificates
docker cp elpan-website:/etc/letsencrypt ./letsencrypt-backup
```

## Maintenance

### Monitoring

1. Container Status:
```bash
# View container status
docker ps -a | grep elpan-website

# View logs
docker logs elpan-website

# Follow logs in real-time
docker logs -f elpan-website
```

2. Resource Usage:
```bash
# Monitor container resources
docker stats elpan-website
```

3. Nginx Logs:
```bash
# Access logs
docker exec elpan-website tail -f /var/log/nginx/access.log

# Error logs
docker exec elpan-website tail -f /var/log/nginx/error.log
```

### Backup Procedures

1. SSL Certificates:
```bash
# Create backup directory
mkdir -p backups/ssl
docker cp elpan-website:/etc/letsencrypt ./backups/ssl/
```

2. Configuration:
```bash
# Backup nginx configuration
docker cp elpan-website:/etc/nginx/conf.d/default.conf ./backups/nginx.conf
```

## Troubleshooting

### Common Issues and Solutions

1. Site Not Accessible
```bash
# Check if container is running
docker ps | grep elpan-website

# Check nginx configuration
docker exec elpan-website nginx -t

# Check nginx logs
docker exec elpan-website tail -f /var/log/nginx/error.log
```

2. SSL Certificate Issues
```bash
# Verify certificate existence
docker exec elpan-website ls -la /etc/letsencrypt/live/

# Check certbot logs
docker exec elpan-website certbot certificates
```

3. Performance Issues
```bash
# Check resource usage
docker stats elpan-website

# Monitor nginx access patterns
docker exec elpan-website tail -f /var/log/nginx/access.log
```

## Security Best Practices

1. Regular Updates
```bash
# Update base images
docker pull nginx:alpine
docker pull node:18-alpine

# Rebuild application with updates
docker build --no-cache -t elpan-website:latest .
```

2. Security Headers
- Implemented in nginx.conf:
  - HSTS
  - XSS Protection
  - Content Security Policy
  - Frame Options
  - Referrer Policy

3. SSL Configuration
- TLS 1.2 and 1.3 only
- Strong cipher suite
- Regular certificate renewal

4. Access Control
```bash
# Review nginx access logs for suspicious activity
docker exec elpan-website tail -f /var/log/nginx/access.log | grep -i "error\|warn"
```

## Production Optimizations

1. Cache Configuration
- Static files cached for 1 year
- Cache-Control headers set
- Gzip compression enabled

2. Performance Monitoring
```bash
# Monitor response times
docker exec elpan-website tail -f /var/log/nginx/access.log | awk '{print $NF}'
```

## Contact & Support
- Technical Support: [your-email]
- Emergency Contact: [emergency-contact]
- Documentation Updates: [docs-repo-url]

## License
[Your License Information]
